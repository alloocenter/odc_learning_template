import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementService } from '../../services/departement/departement.service';
import { MatDialog } from '@angular/material/dialog';
import { Departement } from '../../models/employe.model';
import { DepartementFormComponent } from '../departement-form/departement-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from 'app/material-imports';

@Component({
  selector: 'app-departement-liste',
  standalone: true,
  imports: [CommonModule, MaterialModules, FormsModule],
  templateUrl: './departement-liste.component.html',
  styleUrl: './departement-liste.component.scss'
})
export class DepartementListeComponent implements OnInit {

  private departementService = inject(DepartementService);
  private dialog = inject(MatDialog);
  
  departements: Departement[] = [];

  ngOnInit() {
    this.loadDepartements();
  }

  loadDepartements() {
    this.departementService.getDepartements().subscribe(depts => this.departements = depts);
  }

  ouvrirAjouterDepartement() {
    const dialogRef = this.dialog.open(DepartementFormComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe(result => result && this.loadDepartements());
  }

  supprimerDepartement(id: number) {
    if(confirm('Supprimer ce département?')) {
      this.departementService.supprimerDepartement(id).subscribe(() => this.loadDepartements());
    }
  }

}
