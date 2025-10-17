import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModules } from 'app/material-imports';
import { EmployeService } from '../../services/employe/employe.service';
import { AuthService } from 'app/core/auth/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Departement, Employe } from '../../models/employe.model';

@Component({
  selector: 'app-employe-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModules],
  templateUrl: './employe-form.component.html',
  styleUrl: './employe-form.component.scss'
})
export class EmployeFormComponent {

  private employeService = inject(EmployeService);
  private dialogRef = inject(MatDialogRef<EmployeFormComponent>);

  employe: Partial<Employe> = {};
  isEdit = false;

  departements : Departement[] = [
     { id: 1, nom: 'COMPTABILITE', description: 'Département Comptabilité', dateCreation: '2020-01-01', actif: true },
     { id: 2, nom: 'INFORMATIQUE', description: 'Département Informatique', dateCreation: '2020-01-01', actif: true },
     { id: 3, nom: 'RH', description: 'Département Ressources Humaines', dateCreation: '2020-01-01', actif: true }
  ];


  grades = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2'];
  situationsFamiliales = ['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {employe? : Employe }
  ) {
    if(data.employe) {
      this.employe = { ...data.employe};
      this.isEdit = true;
    } else {
      this.employe = {
        genre: 'M',
        situationFamiliale: 'Célibataire',
        nombreEnfants: 0,
        statut: 'ACTIF'
      };
    }
  }


  onSubmit(): void {
    if(this.isEdit) {
      this.employeService.modifierEmploye(this.employe.id!, this.employe as Employe).subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Erreur lors de la modification:', error);
          
        }
      });
    } else {
      this.employeService.ajouterEmploye(this.employe as Omit<Employe, 'id' | 'matricule'>).subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout:', error);        

        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
