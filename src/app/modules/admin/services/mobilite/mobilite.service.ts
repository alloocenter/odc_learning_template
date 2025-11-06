import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { MobiliteHorizontale, MobiliteVerticale, PlanSuccession } from '../../models/mobilite.model';

@Injectable({
  providedIn: 'root'
})
export class MobiliteService {

  private mobilitesHorizontales = signal<MobiliteHorizontale[]>([]);
  private mobilitesVerticales = signal<MobiliteVerticale[]>([]);
  private plansSuccession = signal<PlanSuccession[]>([]);

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    // Données simulées pour les mobilités horizontales
    this.mobilitesHorizontales.set([
      {
        id: 1,
        employeId: 2,
        employeNom: 'KONE',
        employePrenom: 'Aïcha',
        ancienPoste: 'Agent de Déclaration',
        nouveauPoste: 'Superviseur Déclaration',
        ancienneDirection: 'Direction des Opérations',
        nouvelleDirection: 'Direction des Opérations',
        dateMobilite: '2024-02-01',
        motif: 'Développement des compétences en supervision',
        duree: 12,
        statut: 'PROPOSEE'
      }
    ]);

    // Données simulées pour les mobilités verticales
    this.mobilitesVerticales.set([
      {
        id: 1,
        employeId: 1,
        employeNom: 'DIARRA',
        employePrenom: 'Moussa',
        ancienGrade: 'B2',
        nouveauGrade: 'A3',
        type: 'PROMOTION',
        dateMobilite: '2024-01-15',
        motif: 'Excellentes performances et leadership',
        statut: 'VALIDEE'
      }
    ]);

    // Données simulées pour les plans de succession
    this.plansSuccession.set([
      {
        id: 1,
        posteCible: 'Directeur des Opérations',
        direction: 'Direction des Opérations',
        dateCreation: '2024-01-01',
        statut: 'ACTIF',
        employesPotentiels: [
          {
            employeId: 1,
            employeNom: 'DIARRA',
            employePrenom: 'Moussa',
            niveauPreparation: 'ELEVE',
            delaiEstime: '2-3 ans',
            actionsFormation: ['Formation en management stratégique', 'Stage international']
          }
        ]
      }
    ]);
  }

  // Mobilités horizontales
  getMobilitesHorizontales() {
    return of(this.mobilitesHorizontales());
  }

  proposerMobiliteHorizontale(mobilite: Omit<MobiliteHorizontale, 'id'>) {
    const newMobilite: MobiliteHorizontale = {
      ...mobilite,
      id: Math.max(0, ...this.mobilitesHorizontales().map(m => m.id)) + 1
    };
    this.mobilitesHorizontales.update(mobilites => [...mobilites, newMobilite]);
    return of(newMobilite);
  }

  // Mobilités verticales
  getMobilitesVerticales() {
    return of(this.mobilitesVerticales());
  }

  proposerMobiliteVerticale(mobilite: Omit<MobiliteVerticale, 'id'>) {
    const newMobilite: MobiliteVerticale = {
      ...mobilite,
      id: Math.max(0, ...this.mobilitesVerticales().map(m => m.id)) + 1
    };
    this.mobilitesVerticales.update(mobilites => [...mobilites, newMobilite]);
    return of(newMobilite);
  }

  // Plans de succession
  getPlansSuccession() {
    return of(this.plansSuccession());
  }

  creerPlanSuccession(plan: Omit<PlanSuccession, 'id'>) {
    const newPlan: PlanSuccession = {
      ...plan,
      id: Math.max(0, ...this.plansSuccession().map(p => p.id)) + 1
    };
    this.plansSuccession.update(plans => [...plans, newPlan]);
    return of(newPlan);
  }


}
