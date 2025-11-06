import { Component } from '@angular/core';
import { Employe } from '../../models/employe.model';
import { CommonModule } from '@angular/common';
import { MaterialModules } from 'app/material-imports';

@Component({
  selector: 'app-employe-details',
  standalone: true,
  imports: [CommonModule, MaterialModules],
  templateUrl: './employe-details.component.html',
  styleUrl: './employe-details.component.scss'
})
export class EmployeDetailsComponent {

  employe: Employe;

  today: Date = new Date();

  getStatusLabel(statut: string): string {
    const statusMap: {[key: string]: string} = {
      'ACTIF': 'Actif',
      'INACTIF': 'Inactif',
      'RETRAITE': 'Retraité',
      'CONGE': 'En Congé',
      'DETACHE': 'Détaché'
    }
    return statusMap[statut] || statut;
  }

  getStatusClass(statut: string): string {
    const classMap: {[key: string]: string} = {
      'ACTIF': 'bg-green-100 text-green-800',
      'INACTIF': 'bg-red-100 text-red-800',
      'RETRAITE': 'bg-blue-100 text-blue-800',
      'CONGE': 'bg-yellow-100 text-yellow-800',
      'DETACHE': 'bg-purple-100 text-purple-800'
    };
    return classMap[statut] || 'bg-gray-100 text-gray-800';
  }

  calculateAnciennete(dateEmbauche: string): string {
    if(!dateEmbauche) return 'Non définie';

    const embauche = new Date(dateEmbauche);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - embauche.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    
    return `${diffYears} an(s) et ${diffMonths} mois`;

  }


  printFiche(): void {
    window.print();
  }

  onClose(): void {
    // Logique pour fermer le dialogue
  }


}
