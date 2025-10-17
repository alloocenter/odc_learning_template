import { CongeEmployeFormComponent } from './../conge-employe-form/conge-employe-form.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeService } from 'app/modules/admin/services/employe/employe.service';
import { AuthService } from 'app/modules/admin/services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CongeService } from 'app/modules/admin/services/conge/conge.service';
import { Conge } from 'app/modules/admin/models/conge.model';
import { Employe } from 'app/modules/admin/models/employe.model';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from 'app/material-imports';

@Component({
  selector: 'app-employe-conge',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModules],
  templateUrl: './employe-conge.component.html',
  styleUrl: './employe-conge.component.scss'
})
export class EmployeCongeComponent {

  private employeService = inject(EmployeService);
  private congeService = inject(CongeService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);


  conges: Conge[] = [];
  employes: Employe[] = [];
  loading = false;
  isRH = false;


  displayedColumns: string[] = ['employe', 'type', 'periode', 'duree', 'statut', 'actions'];


  ngOnInit(): void {
    this.isRH = this.authService.hasRole('ADMIN') || this.authService.hasRole('RH');
    this.loadConges();
    this.loadEmployes();
  }

  loadConges(): void {
    this.loading = true;
    this.congeService.getConges().subscribe({
      next: (conges) => {
        this.conges = conges;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des congés:', error);
        this.loading = false;
      }
    });
  }

  loadEmployes(): void {
    this.employeService.getEmployes().subscribe({
      next: (employes) => {
        this.employes = employes;
      }
    });
  }


  // Add computed properties for the template
  get congesEnAttente(): number {
    return this.conges.filter(c => c.statut === 'EN_ATTENTE').length;
  }

  get congesValides(): number {
    return this.conges.filter(c => c.statut === 'VALIDE').length;
  }

  get congesRejetes(): number {
    return this.conges.filter(c => c.statut === 'REJETE').length;
  }



  ouvrirDemandeConge(): void {
    const dialogRef = this.dialog.open(CongeEmployeFormComponent, {
      width: '600px',
      height: '600px',
      data: { employes: this.employes }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadConges();
      }
    });
  }

  validerConge(conge: Conge): void {
    this.congeService.modifierStatutConge(conge.id, 'VALIDE').subscribe({
      next: () => {
        this.loadConges();
      },
      error: (error) => {
        console.error('Erreur lors de la validation:', error);
      }
    });
  }

  rejeterConge(conge: Conge): void {
    this.congeService.modifierStatutConge(conge.id, 'REJETE').subscribe({
      next: () => {
        this.loadConges();
      },
      error: (error) => {
        console.error('Erreur lors du rejet:', error);
      }
    });
  }

  getEmployeName(employeId: number): string {
    const employe = this.employes.find(e => e.id === employeId);
    return employe ? `${employe.prenom} ${employe.nom}` : 'N/A';
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'VALIDE': return 'bg-green-100 text-green-800';
      case 'EN_ATTENTE': return 'bg-yellow-100 text-yellow-800';
      case 'REJETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getTypeColor(type: string): string {
    switch (type) {
      case 'ANNUEL': return 'bg-blue-100 text-blue-800';
      case 'MALADIE': return 'bg-orange-100 text-orange-800';
      case 'MATERNITE': return 'bg-pink-100 text-pink-800';
      case 'PATERNITE': return 'bg-teal-100 text-teal-800';
      case 'EXCEPTIONNEL': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }


}
