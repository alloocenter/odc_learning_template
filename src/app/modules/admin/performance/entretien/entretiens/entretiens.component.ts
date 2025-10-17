import { Entretien } from './../../../models/performance.model';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from 'app/material-imports';
import { PlanifierEntretiensComponent } from '../planifier-entretiens/planifier-entretiens.component';
import { PerformanceService } from 'app/modules/admin/services/performance/performance.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-entretiens',
  standalone: true,
  imports: [CommonModule, MaterialModules],
  templateUrl: './entretiens.component.html',
  styleUrl: './entretiens.component.scss'
})
export class EntretiensComponent implements OnInit {

  private performancesService = inject(PerformanceService);
  private dialog = inject(MatDialog);

  entretiens: Entretien[] = [];
  displayedColumns: string[] = ['employe', 'date', 'type', 'evaluateur', 'noteGlobale', 'statut', 'actions'];
  loading = false;

  ngOnInit(): void {
    this.loadEntretiens();
  }


  loadEntretiens(): void {
    this.loading = true;
    this.performancesService.getEntretiens().subscribe({
      next: (entretiens) => {
        this.entretiens = entretiens;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des entretiens:', error);
        this.loading = false;
      }
    });
  }

  // planifierEntretien(): number {
  //   return this.entretiens.filter(e => e.statut === 'PLANIFIE').length;
  // }


  // realiserEntretien(): number {
  //   return this.entretiens.filter(e => e.statut === 'REALISE').length;
  // }

  // annulerEntretien(): number {
  //   return this.entretiens.filter(e => e.statut === 'ANNULE').length; 
  // }

  // realiserEntretienWithNote(): number {
  //   return this.
  // }



  ouvrirPlanificationEntretien(): void {
    const dialogRef = this.dialog.open(PlanifierEntretiensComponent, {
      width: '700px',
      //heigth: '100px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEntretiens();
      }
    });
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'REALISE': return 'bg-green-100 text-green-800';
      case 'PLANIFIE': return 'bg-blue-100 text-blue-800';
      case 'ANNULE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getTypeColor(type: string): string {
    switch (type) {
      case 'ANNUEL': return 'bg-purple-100 text-purple-800';
      case 'PONCTUEL': return 'bg-orange-100 text-orange-800';
      case 'PROMOTION': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getNoteColor(note: number): string {
    if (note >= 4) return 'text-green-600';
    if (note >= 3) return 'text-yellow-600';
    return 'text-red-600';
  }





  // Ajoutez ces propriétés calculées
  moyenneNotes: number = 0;
  entretiensRealisesCount: number = 0;
  entretiensAnnulesCount: number = 0;


  
  calculerStatistiques(): void {
    // Calcul des entretiens réalisés
    const entretiensRealises = this.entretiens.filter(e => e.statut === 'REALISE');
    this.entretiensRealisesCount = entretiensRealises.length;
    
    // Calcul de la moyenne
    if (this.entretiensRealisesCount > 0) {
      const sommeNotes = entretiensRealises.reduce((acc, e) => acc + e.noteGlobale, 0);
      this.moyenneNotes = sommeNotes / this.entretiensRealisesCount;
    } else {
      this.moyenneNotes = 0;
    }
    
    // Calcul des entretiens annulés
    this.entretiensAnnulesCount = this.entretiens.filter(e => e.statut === 'ANNULE').length;
  }

  get entretiensPlanifier(): Entretien[] {
    return this.entretiens.filter(e => e.statut === 'PLANIFIE');
  }

  // Ou si vous préférez utiliser des getters :
  get entretiensRealises(): Entretien[] {
    return this.entretiens.filter(e => e.statut === 'REALISE');
  }

  get entretiensAnnules(): Entretien[] {
    return this.entretiens.filter(e => e.statut === 'ANNULE');
  }
}
