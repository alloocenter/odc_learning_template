import { CommonModule, I18nPluralPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MaterialModules } from 'app/material-imports';
import { AuthService } from 'app/modules/admin/services/auth/auth.service';
import { finalize, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';

@Component({
    selector     : 'auth-sign-out',
    templateUrl  : './sign-out.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [NgIf, RouterLink, CommonModule, MaterialModules, I18nPluralPipe],
})
export class AuthSignOutComponent implements OnInit, OnDestroy
{
    countdown = 5;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // Déconnexion immédiate
    this._authService.logout();

    // Compte à rebours pour la redirection
    const countdownInterval = setInterval(() => {
      this.countdown--;
      
      if (this.countdown === 0) {
        clearInterval(countdownInterval);
        this._router.navigate(['/sign-in']);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
