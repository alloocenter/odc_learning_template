import { Injectable, signal } from '@angular/core';
import { ContratPerformance, Entretien, IndicateurPerformance } from '../../models/performance.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private entretiens = signal<Entretien[]>([]);
  private contrats = signal<ContratPerformance[]>([]);
  private indicateurs = signal<IndicateurPerformance[]>([]);

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    // Données simulées pour les entretiens
    this.entretiens.set([
      {
        id: 1,
        employeId: 1,
        employeNom: 'DIARRA',
        employePrenom: 'Moussa',
        dateEntretien: '2024-01-20',
        type: 'ANNUEL',
        evaluateur: 'Directeur RH',
        objectifsAtteints: 85,
        competencesEvaluees: ['Leadership', 'Gestion d\'équipe', 'Connaissances techniques'],
        pointsForts: ['Excellente gestion d\'équipe', 'Fort engagement'],
        pointsAmelioration: ['Formation en gestion de projet', 'Développement des compétences numériques'],
        recommandations: 'Promotion au grade A3 recommandée',
        noteGlobale: 4.2,
        statut: 'REALISE'
      }
    ]);

    // Données simulées pour les contrats de performance
    this.contrats.set([
      {
        id: 1,
        employeId: 1,
        employeNom: 'DIARRA',
        employePrenom: 'Moussa',
        dateDebut: '2024-01-01',
        dateFin: '2024-12-31',
        statut: 'ACTIF',
        objectifs: [
          {
            id: 1,
            description: 'Augmenter la productivité de l\'équipe de 15%',
            indicateurs: 'Taux de productivité',
            poids: 40,
            realisation: 75,
            dateEvaluation: '2024-06-30'
          },
          {
            id: 2,
            description: 'Réduire les erreurs de déclaration de 20%',
            indicateurs: 'Taux d\'erreur',
            poids: 30,
            realisation: 60,
            dateEvaluation: '2024-06-30'
          }
        ]
      }
    ]);

    // Données simulées pour les indicateurs
    this.indicateurs.set([
      {
        id: 1,
        nom: 'Taux de productivité',
        description: 'Pourcentage d\'objectifs atteints par rapport aux objectifs fixés',
        type: 'QUANTITATIF',
        unite: '%',
        cible: 100,
        seuilMin: 70,
        seuilMax: 120,
        actif: true
      },
      {
        id: 2,
        nom: 'Satisfaction des usagers',
        description: 'Niveau de satisfaction des usagers du service',
        type: 'QUALITATIF',
        unite: '/5',
        cible: 4.5,
        seuilMin: 3,
        seuilMax: 5,
        actif: true
      }
    ]);
  }

  // Entretiens
  getEntretiens() {
    return of(this.entretiens());
  }

  planifierEntretien(entretien: Omit<Entretien, 'id'>) {
    const newEntretien: Entretien = {
      ...entretien,
      id: Math.max(0, ...this.entretiens().map(e => e.id)) + 1
    };
    this.entretiens.update(entretiens => [...entretiens, newEntretien]);
    return of(newEntretien);
  }

  // Contrats de performance
  getContrats() {
    return of(this.contrats());
  }

  creerContrat(contrat: Omit<ContratPerformance, 'id'>) {
    const newContrat: ContratPerformance = {
      ...contrat,
      id: Math.max(0, ...this.contrats().map(c => c.id)) + 1
    };
    this.contrats.update(contrats => [...contrats, newContrat]);
    return of(newContrat);
  }

  // Indicateurs
  getIndicateurs() {
    return of(this.indicateurs());
  }

  creerIndicateur(indicateur: Omit<IndicateurPerformance, 'id'>) {
    const newIndicateur: IndicateurPerformance = {
      ...indicateur,
      id: Math.max(0, ...this.indicateurs().map(i => i.id)) + 1
    };
    this.indicateurs.update(indicateurs => [...indicateurs, newIndicateur]);
    return of(newIndicateur);
  }
}
