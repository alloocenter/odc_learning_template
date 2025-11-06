export interface Entretien {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  dateEntretien: string;
  type: 'ANNUEL' | 'PONCTUEL' | 'PROMOTION';
  evaluateur: string;
  objectifsAtteints: number;
  competencesEvaluees: string[];
  pointsForts: string[];
  pointsAmelioration: string[];
  recommandations: string;
  noteGlobale: number;
  statut: 'PLANIFIE' | 'REALISE' | 'ANNULE';
}

export interface ContratPerformance {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  dateDebut: string;
  dateFin: string;
  objectifs: ObjectifPerformance[];
  statut: 'ACTIF' | 'TERMINE' | 'ANNULE';
}

export interface ObjectifPerformance {
  id: number;
  description: string;
  indicateurs: string;
  poids: number;
  realisation: number;
  dateEvaluation: string;
}

export interface IndicateurPerformance {
  id: number;
  nom: string;
  description: string;
  type: 'QUANTITATIF' | 'QUALITATIF';
  unite: string;
  cible: number;
  seuilMin: number;
  seuilMax: number;
  actif: boolean;
}












export interface Performance {
  id?: number;
  employeId: number;
  employe?: any;
  contrat: string;
  indicateur: string;
  note: number;
  dateEvaluation: Date;
}

// export interface Entretien {
//   id?: number;
//   employeId: number;
//   dateEntretien: Date;
//   objectifs: string;
//   resultats: string;
//   evaluateur: string;
// }