export interface MobiliteHorizontale {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  ancienPoste: string;
  nouveauPoste: string;
  ancienneDirection: string;
  nouvelleDirection: string;
  dateMobilite: string;
  motif: string;
  duree: number;
  statut: 'PROPOSEE' | 'VALIDEE' | 'ANNULEE';
}

export interface MobiliteVerticale {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  ancienGrade: string;
  nouveauGrade: string;
  type: 'PROMOTION' | 'MUTATION' | 'AFFECTATION';
  dateMobilite: string;
  motif: string;
  statut: 'PROPOSEE' | 'VALIDEE' | 'ANNULEE';
}

export interface PlanSuccession {
  id: number;
  posteCible: string;
  direction: string;
  employesPotentiels: EmployeSuccession[];
  dateCreation: string;
  statut: 'ACTIF' | 'INACTIF' | 'REALISE';
}

export interface EmployeSuccession {
  employeId: number;
  employeNom: string;
  employePrenom: string;
  niveauPreparation: 'ELEVE' | 'MOYEN' | 'FAIBLE';
  delaiEstime: string;
  actionsFormation: string[];
}