import { Injectable, signal } from '@angular/core';
import { Departement } from '../../models/employe.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private departements = signal<Departement[]>([
    { id: 1, nom: 'COMPTABILITE', description: 'Département de la comptabilité', dateCreation: '2024-01-01', actif: true },
    { id: 2, nom: 'INFORMATIQUE', description: 'Département informatique', dateCreation: '2024-01-01', actif: true },
    { id: 3, nom: 'RH', description: 'Ressources Humaines', dateCreation: '2024-01-01', actif: true }
  ]);

 getDepartements(): Observable<Departement[]> {
    return of(this.departements());
  }

  ajouterDepartement(departement: Omit<Departement, 'id'>): Observable<Departement> {
    const newDept: Departement = {
      ...departement,
      id: Math.max(0, ...this.departements().map(d => d.id)) + 1
    };
    this.departements.update(depts => [...depts, newDept]);
    return of(newDept);
  }

  supprimerDepartement(id: number): Observable<boolean> {
    this.departements.update(depts => depts.filter(d => d.id !== id));
    return of(true);
  }
}
