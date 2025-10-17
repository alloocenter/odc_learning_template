import { Injectable, signal } from '@angular/core';
import { Affectation, Promotion, Retraite } from '../../models/carriere.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarriereService {

  private affectations = signal<Affectation[]>([]);
  private promotions = signal<Promotion[]>([]);
  private retraites = signal<Retraite[]>([]);

  constructor() { 
    this.initializeData();
  }


  private initializeData(): void {
    // Données simulées pour les affectations
    this.affectations.set([
      {
        id: 1,
        employeId: 1,
        employeNom: 'DIARRA',
        employePrenom: 'Moussa',
        ancienPoste: 'Agent de Douane',
        nouveauPoste: 'Chef de Service',
        ancienneDirection: 'Direction des Opérations',
        nouvelleDirection: 'Direction des Opérations',
        dateAffectation: '2024-01-15',
        motif: 'Promotion interne',
        statut: 'VALIDEE'
      },
      {
        id: 2,
        employeId: 2,
        employeNom: 'KONE',
        employePrenom: 'Aïcha',
        ancienPoste: 'Agent de Déclaration',
        nouveauPoste: 'Superviseur Déclaration',
        ancienneDirection: 'Direction des Opérations',
        nouvelleDirection: 'Direction des Opérations',
        dateAffectation: '2024-01-20',
        motif: 'Développement des compétences',
        statut: 'PROPOSEE'
      }
    ]);

    // Données simulées pour les promotions
    this.promotions.set([
      {
        id: 1,
        employeId: 1,
        employeNom: 'DIARRA',
        employePrenom: 'Moussa',
        ancienGrade: 'B2',
        nouveauGrade: 'A3',
        ancienEchelon: '4',
        nouveauEchelon: '5',
        datePromotion: '2024-01-15',
        motif: 'Excellentes performances',
        augmentation: 150000,
        statut: 'VALIDEE'
      }
    ]);

    // Données simulées pour les retraites
    this.retraites.set([
      {
        id: 1,
        employeId: 3,
        employeNom: 'TRAORE',
        employePrenom: 'Sékou',
        dateDepart: '2024-03-01',
        dateDemande: '2024-01-10',
        typeRetraite: 'NORMALE',
        statut: 'VALIDE',
        motif: 'Âge de la retraite atteint',
        pension: 750000
      }
    ]);
  }

  // Affectations
  getAffectations() {
    return of(this.affectations());
  }

  proposerAffectation(affectation: Omit<Affectation, 'id'>) {
    const newAffectation: Affectation = {
      ...affectation,
      id: Math.max(0, ...this.affectations().map(a => a.id)) + 1
    };
    this.affectations.update(affectations => [...affectations, newAffectation]);
    return of(newAffectation);
  }

  modifierStatutAffectation(id: number, statut: Affectation['statut']) {
    this.affectations.update(affectations => 
      affectations.map(a => a.id === id ? { ...a, statut } : a)
    );
    return of(true);
  }

  // Promotions
  getPromotions() {
    return of(this.promotions());
  }

  proposerPromotion(promotion: Omit<Promotion, 'id'>) {
    const newPromotion: Promotion = {
      ...promotion,
      id: Math.max(0, ...this.promotions().map(p => p.id)) + 1
    };
    this.promotions.update(promotions => [...promotions, newPromotion]);
    return of(newPromotion);
  }

  modifierStatutPromotion(id: number, statut: Promotion['statut']) {
    this.promotions.update(promotions => 
      promotions.map(p => p.id === id ? { ...p, statut } : p)
    );
    return of(true);
  }

  // Retraites
  getRetraites() {
    return of(this.retraites());
  }

  demanderRetraite(retraite: Omit<Retraite, 'id'>) {
    const newRetraite: Retraite = {
      ...retraite,
      id: Math.max(0, ...this.retraites().map(r => r.id)) + 1
    };
    this.retraites.update(retraites => [...retraites, newRetraite]);
    return of(newRetraite);
  }

  modifierStatutRetraite(id: number, statut: Retraite['statut']) {
    this.retraites.update(retraites => 
      retraites.map(r => r.id === id ? { ...r, statut } : r)
    );
    return of(true);
  }


}
