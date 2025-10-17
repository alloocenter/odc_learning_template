import { CongeService } from 'app/modules/admin/services/conge/conge.service';
import { MaterialModules } from 'app/material-imports';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeService } from '../../services/employe/employe.service';
import { CarriereService } from '../../services/carriere/carriere.service';
import { PerformanceService } from '../../services/performance/performance.service';
import { Employe } from '../../models/employe.model';
import { Conge } from '../../models/conge.model';

@Component({
  selector: 'app-fiches-employe',
  standalone: true,
  imports: [CommonModule, MaterialModules],
  templateUrl: './fiches-employe.component.html',
  styleUrl: './fiches-employe.component.scss'
})
export class FichesEmployeComponent implements OnInit {

  private employeService = inject(EmployeService);
  private carriereService = inject(CarriereService);
  private performanceService = inject(PerformanceService);
  private congeService = inject(CongeService);

  employes: Employe[] = [];
  employeSelectionne: Employe | null = null;
  congesEmploye: Conge[] = [];
  // affectationsEmploye: Affectation[] = [];
  // promotionsEmploye: Promotion[] = [];
  // entretiensEmploye: Entretien[] = [];
  loading = false;

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.loading = true;
    this.employeService.getEmployes().subscribe({
      next: (employes) => {
        this.employes = employes;
        if (employes.length > 0) {
          this.selectionnerEmploye(employes[0]);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des employés:', error);
        this.loading = false;
      }
    });
  }

  selectionnerEmploye(employe: Employe): void {
    this.employeSelectionne = employe;
    this.loadDetailsEmploye(employe.id);
  }

  loadDetailsEmploye(employeId: number): void {
    // Charger les congés
    this.congeService.getCongesByEmploye(employeId).subscribe(conges => {
    this.congesEmploye = conges;
    });

    // Charger les affectations (simulé)



     // Charger les promotions (simulé)



     // Charger les entretiens (simulé)

  }

  getAge(dateNaissance: string): number {
    const today = new Date();
    const birthDate = new Date(dateNaissance);
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getAnciennete(dateEmbauche: string): number {
    const today = new Date();
    const hireDate = new Date(dateEmbauche);
    return today.getFullYear() - hireDate.getFullYear();
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

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('fr-ML', {
      style: 'currency',
      currency: 'XOF'
    }).format(amount);
  }

}
