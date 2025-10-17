import { Departement } from './../../models/employe.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModules } from 'app/material-imports';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeService } from '../../services/employe/employe.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeFormComponent } from '../employe-form/employe-form.component';
import { Employe } from '../../models/employe.model';


@Component({
  selector: 'app-employe-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModules],
  templateUrl: './employe-list.component.html',
  styleUrl: './employe-list.component.scss'
})
export class EmployeListComponent implements OnInit {

  displayedColumns: string[] = ['matricule', 'nom', 'prenom', 'poste', 'grade', 'departement', 'statut', 'actions'];
  dataSource = new MatTableDataSource<Employe>();
  loading = false;

  departements: Departement[]= [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private employeService: EmployeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEmployes();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadEmployes(): void {
    this.loading = true;
    this.employeService.getEmployes().subscribe({
      next: (employes) => {
        this.dataSource.data = employes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des employés:', error);
        this.loading = false;
        
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ouvrirAjouterEmploye(): void {
    const dialogRef = this.dialog.open(EmployeFormComponent, 
      {
        width: '800px',
        height: '600px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.loadEmployes();
        }
      });
  }

  modifierEmploye(employe: Employe): void {
    const dialogRef = this.dialog.open(EmployeFormComponent,
      {
      width: '800px',
      height: '600px',
      data: {employe}
    });
    
  }

  supprimerEmploye(employe: Employe): void {
    if(confirm(`Êtes-vous sûr de vouloir supprimer ${employe.prenom} ${employe.nom} ?`)) {
      this.employeService.supprimerEmploye(employe.id).subscribe({
        next: () => {
          this.loadEmployes();
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
          
        }
      });
    }
  }

  


  getStatutColor(statut: string): string {
     switch (statut) {
      case 'ACTIF': return 'bg-green-100 text-green-800';
      case 'INACTIF': return 'bg-red-100 text-red-800';
      case 'RETRAITE': return 'bg-yellow-100 text-yellow-800';
      case 'CONGE': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

}
