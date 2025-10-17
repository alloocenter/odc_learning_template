export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
}

export interface User {
  id: number;
  email: string;
  role: 'ADMIN' | 'RH' | 'EMPLOYE';
  nom: string;
  prenom: string;
  employeId?: number;
}