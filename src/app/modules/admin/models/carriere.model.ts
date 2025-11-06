import { Employe } from "./employe.model";

export interface Carriere {
  id?: number;
  employeId: number;
  employe?: Employe;
  typeEvenement: 'AFFECTATION' | 'PROMOTION' | 'RETRAITE' | 'DETACHEMENT';
  dateEvenement: Date;
  details: string;
  ancienPoste?: string;
  nouveauPoste?: string;
}


export interface Affectation {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  ancienPoste: string;
  nouveauPoste: string;
  ancienneDirection: string;
  nouvelleDirection: string;
  dateAffectation: string;
  motif: string;
  statut: 'PROPOSEE' | 'VALIDEE' | 'ANNULEE';
}

export interface Promotion {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  ancienGrade: string;
  nouveauGrade: string;
  ancienEchelon: string;
  nouveauEchelon: string;
  datePromotion: string;
  motif: string;
  augmentation: number;
  statut: 'PROPOSEE' | 'VALIDEE' | 'ANNULEE';
}

export interface Retraite {
  id: number;
  employeId: number;
  employeNom?: string;
  employePrenom?: string;
  dateDepart: string;
  dateDemande: string;
  typeRetraite: 'ANTICIPEE' | 'NORMALE' | 'INVALIDITE';
  statut: 'EN_COURS' | 'VALIDE' | 'REJETEE';
  motif: string;
  pension: number;
}
