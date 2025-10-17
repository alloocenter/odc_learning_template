import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from 'app/material-imports';
import { FormsModule } from '@angular/forms';
import { Departement } from '../../models/employe.model';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartementService } from '../../services/departement/departement.service';

@Component({
  selector: 'app-departement-form',
  standalone: true,
  imports: [CommonModule, MaterialModules, FormsModule],
  templateUrl: './departement-form.component.html',
  styleUrl: './departement-form.component.scss'
})
export class DepartementFormComponent {

   private departementService = inject(DepartementService);
  private dialogRef = inject(MatDialogRef<DepartementFormComponent>);

  departement: Partial<Departement> = { actif: true };

  onSubmit() {
    this.departementService.ajouterDepartement({
      nom: this.departement.nom!,
      description: this.departement.description!,
      dateCreation: new Date().toISOString().split('T')[0],
      actif: true
    }).subscribe(() => this.dialogRef.close(true));
  }

  onCancel() {
    this.dialogRef.close(false);
  }

}
