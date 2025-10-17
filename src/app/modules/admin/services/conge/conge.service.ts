import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Conge } from '../../models/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private conges: Conge[] = [
    {
      id: 1,
      employeId: 1,
      employeNom: 'DIARRA',
      employePrenom: 'Moussa',
      type: 'ANNUEL',
      dateDebut: '2024-02-01',
      dateFin: '2024-02-15',
      duree: 15,
      statut: 'VALIDE',
      motif: 'Congé annuel',
      dateDemande: '2024-01-10'
    },
    {
      id: 2,
      employeId: 2,
      employeNom: 'KONE',
      employePrenom: 'Aïcha',
      type: 'MALADIE',
      dateDebut: '2024-01-20',
      dateFin: '2024-01-25',
      duree: 5,
      statut: 'VALIDE',
      motif: 'Grippe',
      dateDemande: '2024-01-19'
    }
  ];

  // Congés
  getConges(): Observable<Conge[]> {
    return of(this.conges);
  }

  getCongesByEmploye(employeId: number): Observable<Conge[]> {
    const conges = this.conges.filter(c => c.employeId === employeId);
    return of(conges);
  }

  demanderConge(conge: Omit<Conge, 'id' | 'dateDemande'>): Observable<Conge> {
    const newConge: Conge = {
      ...conge,
      id: Math.max(0, ...this.conges.map(c => c.id)) + 1,
      dateDemande: new Date().toISOString().split('T')[0]
    };
    
    this.conges.push(newConge);
    return of(newConge);
  }

  modifierStatutConge(id: number, statut: Conge['statut']): Observable<boolean> {
    const index = this.conges.findIndex(c => c.id === id);
    if (index !== -1) {
      this.conges[index].statut = statut;
      return of(true);
    }
    return of(false);
  }
}
