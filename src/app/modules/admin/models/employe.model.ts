export interface Employe {
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  genre: 'M' | 'F';
  situationFamiliale: string;
  nombreEnfants: number;
  dateEmbauche: string;
  poste: string;
  grade: string;
  echelon: string;
  //departementId: number;
  departement?: string;
  salaire: number;
  telephone: string;
  email: string;
  adresse: string;
  statut: 'ACTIF' | 'INACTIF' | 'RETRAITE' | 'CONGE';
  photo?: string;
}

export interface Departement {
  id: number;
  nom: string;
  description: string;
  // chefDepartementId?: number;
  dateCreation: string;
  actif: boolean;
}




// export type DepartementType =
// | 'DIRECTION_GENERALE'
// | 'MARITIME'
// | 'AERIENNE'
// | 'TERRESTRE'
// | 'TRANSIT'
// | 'COMPTABILITE'
// | 'FRAUDE'
// | 'RISQUE'
// | 'INSPECTION'
// | 'RENSEIGNEMENT'
// | 'JURIDIQUE'
// | 'INFORMATIQUE'
// | 'RH'
// | 'LOGISTIQUE'
// | 'RELATIONS_INTERNATIONALES'
// | 'FORMATION'
// | 'COMMUNICATION'
// | 'TARIFICATION'
// | 'SURVEILLANCE';


// export type DirectionType =
//   | 'GENERALE'
//   | 'OPERATIONS'
//   | 'RENSEIGNEMENT'
//   | 'ENQUETE'
//   | 'RECETTES'
//   | 'RISQUE'
//   | 'TARIFICATION'
//   | 'JURIDIQUE'
//   | 'INFORMATIQUE'
//   | 'RH'
//   | 'LOGISTIQUE'
//   | 'RELATIONS_INTERNATIONALES'
//   | 'COMMUNICATION'
//   | 'FORMATION'
//   | 'CONTROLE_MARCHANDISE'
//   | 'SURVEILLANCE'
//   | 'MARITIME'
//   | 'AERIENNE'
//   | 'TERRESTRE';