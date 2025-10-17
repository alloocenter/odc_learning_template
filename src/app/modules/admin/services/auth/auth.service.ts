import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { LoginResponse, User } from '../../models/user.model';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/core/user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private _authenticated = false;

  constructor(private router: Router) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
      this._authenticated = true;
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    const users: User[] = [
      {
        id: 1,
        matricule: 'DG-2025-001',
        email: 'admin@douanes.ml',
        role: 'ADMIN',
        nom: 'ADMIN',
        prenom: 'System',
        employeId: 1
      },
      {
        id: 2,
        matricule: 'DG-2025-002',
        email: 'rh@douanes.ml',
        role: 'RH',
        nom: 'KONE',
        prenom: 'Aïcha',
        employeId: 2
      },
      {
        id: 3,
        matricule: 'DG-2025-002',
        email: 'employe@douanes.ml',
        role: 'EMPLOYE',
        nom: 'DIARRA',
        prenom: 'Moussa',
        employeId: 3
      }
    ];

    const user = users.find(u => u.email === email && password === 'password');
    
    if (user) {
      const response: LoginResponse = {
        token: 'simulated-jwt-token-' + user.id,
        refreshToken: 'simulated-refresh-token-' + user.id,
        user: user
      };
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      this.currentUserSubject.next(user);
      this._authenticated = true;
      
      return of(response);
    } else {
      return throwError(() => new Error('Email ou mot de passe incorrect'));
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.currentUserSubject.next(null);
    this._authenticated = false;
    this.router.navigate(['/sign-in']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  hasRole(role: string): boolean {
    const user = this.currentUserSubject.value;
    return user?.role === role;
  }

  isAuthenticated(): boolean {
    return this._authenticated;
  }

  // Connexion avec les réseaux sociaux (simulée)
  loginWithGoogle(): Observable<LoginResponse> {
    // Simulation de connexion Google
    const user: User = {
      id: 4,
      email: 'google.user@douanes.ml',
      matricule: 'DG-2025-004',
      role: 'EMPLOYE',
      nom: 'Google',
      prenom: 'User',
      employeId: 4
    };

    const response: LoginResponse = {
      token: 'simulated-google-token',
      refreshToken: 'simulated-google-refresh-token',
      user: user
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', response.token);
    this.currentUserSubject.next(user);
    this._authenticated = true;

    return of(response);
  }

  loginWithGithub(): Observable<LoginResponse> {
    // Simulation de connexion GitHub
    const user: User = {
      id: 5,
      matricule: 'DG-2025-005',
      email: 'github.user@douanes.ml',
      role: 'EMPLOYE',
      nom: 'GitHub',
      prenom: 'User',
      employeId: 5
    };

    const response: LoginResponse = {
      token: 'simulated-github-token',
      refreshToken: 'simulated-github-refresh-token',
      user: user
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', response.token);
    this.currentUserSubject.next(user);
    this._authenticated = true;

    return of(response);
  }

  loginWithFacebook(): Observable<LoginResponse> {
    // Simulation de connexion Facebook
    const user: User = {
      id: 6,
      matricule: 'DG-2025-006',
      email: 'facebook.user@douanes.ml',
      role: 'EMPLOYE',
      nom: 'Facebook',
      prenom: 'User',
      employeId: 6
    };

    const response: LoginResponse = {
      token: 'simulated-facebook-token',
      refreshToken: 'simulated-facebook-refresh-token',
      user: user
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', response.token);
    this.currentUserSubject.next(user);
    this._authenticated = true;

    return of(response);
  }

  // Inscription
  signUp(userData: any): Observable<any> {
    // Simulation d'inscription
    return of({ success: true, message: 'Inscription réussie' });
  }

  // Mot de passe oublié
  forgotPassword(email: string): Observable<any> {
    return of({ success: true, message: 'Email de réinitialisation envoyé' });
  }

  // Réinitialisation du mot de passe
  resetPassword(newPassword: string): Observable<any> {
    // Si vous avez besoin du token pour l'API réelle, utilisez-le
  // Pour la simulation, on peut s'en passer
    return of({ success: true, message: 'Mot de passe réinitialisé' });
  }



  // Vérification de l'authentification
  check(): Observable<boolean> {
    if (this._authenticated) {
      return of(true);
    }

    // if (!this.accessToken) {
    //   return of(false);
    // }

    // Ici vous pouvez ajouter la vérification de l'expiration du token
    return of(true);
  }

  // Connexion avec token
  signInUsingToken(): Observable<any> {
    return of(true);
  }

  // Déverrouillage de session
  unlockSession(credentials: { email: string; password: string }): Observable<any> {
    return this.login(credentials.email, credentials.password);
  }

  
}
