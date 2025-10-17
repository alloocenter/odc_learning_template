import { Injectable, signal } from '@angular/core';
import { Employe } from '../../models/employe.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private employes: Employe[] = [
    {
      id: 1,
      matricule: 'DG-2025-001',
      nom: 'DIARRA',
      prenom: 'Moussa',
      dateNaissance: '1985-03-15',
      lieuNaissance: 'Bamako',
      genre: 'M',
      situationFamiliale: 'Marié',
      nombreEnfants: 3,
      dateEmbauche: '2010-06-01',
      poste: 'Chef de Service',
      grade: 'A3',
      echelon: '5',
      departement: 'COMPTABILITE',
      salaire: 850000,
      telephone: '+223 76 45 32 10',
      email: 'moussa.diarra@douanes.ml',
      adresse: 'Hamdallaye ACI 2000, Bamako',
      statut: 'ACTIF'
    },
    {
      id: 2,
      matricule: 'DG-2025-002',
      nom: 'KONE',
      prenom: 'Aïcha',
      dateNaissance: '1990-08-22',
      lieuNaissance: 'Ségou',
      genre: 'F',
      situationFamiliale: 'Célibataire',
      nombreEnfants: 0,
      dateEmbauche: '2015-09-15',
      poste: 'Agent de Douane',
      grade: 'B2',
      echelon: '3',
      departement: 'INFORMATIQUE',
      salaire: 650000,
      telephone: '+223 79 12 34 56',
      email: 'aicha.kone@douanes.ml',
      adresse: 'Badalabougou, Bamako',
      statut: 'ACTIF'
    },
    {
      id: 3,
      matricule: 'DG-2025-003',
      nom: 'TRAORE',
      prenom: 'Sékou',
      dateNaissance: '1975-12-10',
      lieuNaissance: 'Kayes',
      genre: 'M',
      situationFamiliale: 'Marié',
      nombreEnfants: 4,
      dateEmbauche: '2000-03-01',
      poste: 'Directeur Adjoint',
      grade: 'A1',
      echelon: '8',
      departement: 'RH',
      salaire: 1200000,
      telephone: '+223 66 78 90 12',
      email: 'sekou.traore@douanes.ml',
      adresse: 'Niamakoro, Bamako',
      statut: 'RETRAITE'
    }
  ];

  getEmployes(): Observable<Employe[]> {
    return of(this.employes);
  }

  getEmployeById(id: number): Observable<Employe> {
    const employe = this.employes.find(e => e.id === id);
    if(employe) {
      return of(employe);
    }
    throw new Error('Employé non trouvé');
  }

  ajouterEmploye(employe: Omit<Employe, 'id' | 'matricule'>): Observable<Employe> {
    const newEmploye: Employe = {
    ...employe,
    id: Math.max(...this.employes.map(e => e.id)) + 1,
    matricule: `DG-2024-${(Math.max(...this.employes.map(e => e.id)) + 1).toString().padStart(3, '0')}`
  };
  this.employes.push(newEmploye);
  return of(newEmploye);
  }

  modifierEmploye(id: number, employe: Employe): Observable<Employe> {
    const index = this.employes.findIndex(e => e.id === id);
    if (index !== -1) {
      this.employes[index] = { ...employe, id };
      return of(this.employes[index]);
    }
    throw new Error('Employé non trouvé');
  }

  supprimerEmploye(id: number): Observable<boolean> {
    const index = this.employes.findIndex(e => e.id === id);
    if (index !== -1) {
      this.employes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
