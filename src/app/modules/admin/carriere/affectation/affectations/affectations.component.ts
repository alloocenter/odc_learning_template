import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeService } from '../../../services/employe/employe.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CarriereService } from '../../../services/carriere/carriere.service';
import { Affectation } from '../../../models/carriere.model';
import { ProposerAffectationComponent } from '../proposer-affectation/proposer-affectation.component';
import { MaterialModules } from 'app/material-imports';

@Component({
  selector: 'app-affectations',
  standalone: true,
  imports: [CommonModule, MaterialModules],
  templateUrl: './affectations.component.html',
  styleUrl: './affectations.component.scss'
})
export class AffectationsComponent implements OnInit {

  private carrieresService = inject(CarriereService);
  private personnelService = inject(EmployeService);
  private dialog = inject(MatDialog);

  affectations: Affectation[] = [];
  displayedColumns: string[] = ['employe', 'ancienPoste', 'nouveauPoste', 'dateAffectation', 'statut', 'actions'];
  loading = false;

   ngOnInit(): void {
    this.loadAffectations();
  }

  loadAffectations(): void {
    this.loading = true;
    this.carrieresService.getAffectations().subscribe({
      next: (affectations) => {
        this.affectations = affectations;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des affectations:', error);
        this.loading = false;
        
      }
    });
  }


    // Add computed properties for the template
  get proposerAffectations(): number {
    return this.affectations.filter(c => c.statut === 'PROPOSEE').length;
  }

  get validerAffectations(): number {
    return this.affectations.filter(c => c.statut === 'VALIDEE').length;
  }

  get rejeterAffectations(): number {
    return this.affectations.filter(c => c.statut === 'ANNULEE').length;
  }



  ouvrirPropositionAffectation(): void {
    const dialogRef = this.dialog.open(ProposerAffectationComponent, {
      width: '600px',
      height: '600px',
      data: {}
    }) ;

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadAffectations();
      }
    });
  }


  validerAffectation(affectation: Affectation): void {
    this.carrieresService.modifierStatutAffectation(affectation.id, 'VALIDEE').subscribe({
      next: () => {
        this.loadAffectations();
      },
      error: (error) => {
        console.error('Erreur lors de la validation:', error);
      }
    });
  }

  annulerAffectation(affectation: Affectation): void {
    this.carrieresService.modifierStatutAffectation(affectation.id, 'ANNULEE').subscribe({
      next: () => {
        this.loadAffectations();
      },
      error: (error) => {
        console.error('Erreur lors de l\'annulation:', error);
      }
    });
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'VALIDEE': return 'bg-green-100 text-green-800';
      case 'PROPOSEE': return 'bg-yellow-100 text-yellow-800';
      case 'ANNULEE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }



}
