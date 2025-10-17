export interface Conge {
  id: number;
  employeId: number;
  employeNom: string;
  employePrenom: string;
  type: 'ANNUEL' | 'MALADIE' | 'MATERNITE' | 'PATERNITE' | 'EXCEPTIONNEL';
  dateDebut: string;
  dateFin: string;
  duree: number;
  statut: 'EN_ATTENTE' | 'VALIDE' | 'REJETE';
  motif: string;
  dateDemande: string;
}