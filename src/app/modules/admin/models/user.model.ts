export interface User {
  id: number;
  matricule: string;
  //username: string;
  email: string;
  role: 'ADMIN' | 'RH' | 'EMPLOYE';
  nom: string;
  prenom: string;
  employeId?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}


export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
}