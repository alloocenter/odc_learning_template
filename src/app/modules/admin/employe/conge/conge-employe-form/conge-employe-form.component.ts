import { MaterialModules } from './../../../../../material-imports';
import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeService } from 'app/modules/admin/services/employe/employe.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employe } from 'app/modules/admin/models/employe.model';
import { CongeService } from 'app/modules/admin/services/conge/conge.service';
import { Conge } from 'app/modules/admin/models/conge.model';
import { AuthService } from 'app/modules/admin/services/auth/auth.service';

@Component({
  selector: 'app-conge-employe-form',
  standalone: true,
  imports: [CommonModule, MaterialModules, FormsModule],
  templateUrl: './conge-employe-form.component.html',
  styleUrl: './conge-employe-form.component.scss'
})
export class CongeEmployeFormComponent {

  private employeService = inject(EmployeService);
  private congeService = inject(CongeService);
  private authService = inject(AuthService);
  private dialogRef = inject(MatDialogRef<CongeEmployeFormComponent>);

  conge: Partial<Conge> = {};
  employes: Employe[] = [];
  isRH = false;
  loading = false;

  typesConge = [
    { value: 'ANNUEL', label: 'Congé Annuel' },
    { value: 'MALADIE', label: 'Congé Maladie' },
    { value: 'MATERNITE', label: 'Congé Maternité' },
    { value: 'PATERNITE', label: 'Congé Paternité' },
    { value: 'EXCEPTIONNEL', label: 'Congé Exceptionnel' }
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {employes: Employe[] }
  ){ 
    this.employes = data.employes;
    this.isRH = this.authService.hasRole('ADMIN') || this.authService.hasRole('RH');

    // Si c'est un employé, pré-remplir avec son ID
    if(!this.isRH) {
      const currentUser = this.authService.getCurrentUser();
      this.conge.employeId = currentUser?.id;
    }
  }

  calculateDuree(): void {
    if(this.conge.dateDebut && this.conge.dateFin) {
      const start = new Date(this.conge.dateDebut);
      const end = new Date(this.conge.dateFin);

       // Vérifier que la date de fin est après la date de début
      if (end < start) {
        this.conge.duree = 0;
        return;
      }

      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime/(1000 * 60 * 60 * 24)) +1;
      this.conge.duree = diffDays;
    }
  }

  onSubmit(): void {
    if(this.isFormValid()) {
      this.loading = true;
      
      // Trouver l'employé pour récupérer nom et prénom
      const employe = this.employes.find(e => e.id === this.conge.employeId);
      
      this.congeService.demanderConge({
        employeId: this.conge.employeId!,
        employeNom: employe?.nom || '',
        employePrenom: employe?.prenom || '',
        type: this.conge.type!,
        dateDebut: this.conge.dateDebut!,
        dateFin: this.conge.dateFin!,
        duree: this.conge.duree || 0,
        statut: 'EN_ATTENTE',
        motif: this.conge.motif!
      } as Omit<Conge, 'id' | 'dateDemande'>).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Erreur lors de la demande de congé:', error);
          this.loading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  private isFormValid(): boolean {
    return !!(this.conge.employeId && 
              this.conge.type && 
              this.conge.dateDebut && 
              this.conge.dateFin && 
              this.conge.motif &&
              this.conge.duree && 
              this.conge.duree > 0);
  }

  // Méthode pour obtenir le nom complet de l'employé
  getEmployeName(employeId: number): string {
    const employe = this.employes.find(e => e.id === employeId);
    return employe ? `${employe.prenom} ${employe.nom}` : 'N/A';
  }

}
