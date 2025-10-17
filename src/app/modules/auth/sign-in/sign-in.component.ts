import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { MaterialModules } from 'app/material-imports';
import { AuthService } from 'app/modules/admin/services/auth/auth.service';


@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink, FuseAlertComponent, NgIf, FormsModule, ReactiveFormsModule, MaterialModules],
})
export class AuthSignInComponent {

    @ViewChild('signInNgForm') signInNgForm: NgForm;
  
  signInForm: FormGroup;
  showPassword = false;
  showAlert = false;
  alert: { type: FuseAlertType; message: string } = {
    type: 'error',
    message: ''
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: ['admin@douanes.com', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required],
      rememberMe: ['']
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  signIn(): void {
    if (this.signInForm.invalid) {
      return;
    }

    this.signInForm.disable();
    this.showAlert = false;

    const { email, password } = this.signInForm.value;

    this._authService.login(email, password).subscribe({
      next: (response) => {
        const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/dashboards';
        this._router.navigateByUrl(redirectURL);
      },
      error: (error) => {
        this.signInForm.enable();
        this.alert = {
          type: 'error',
          message: error.message || 'Une erreur est survenue lors de la connexion'
        };
        this.showAlert = true;
      }
    });
  }

  loginWithGoogle(): void {
    this._authService.loginWithGoogle().subscribe({
      next: (response) => {
        this._router.navigate(['/dashboards']);
      },
      error: (error) => {
        this.alert = {
          type: 'error',
          message: 'Erreur de connexion avec Google'
        };
        this.showAlert = true;
      }
    });
  }

  loginWithGithub(): void {
    this._authService.loginWithGithub().subscribe({
      next: (response) => {
        this._router.navigate(['/dashboards']);
      },
      error: (error) => {
        this.alert = {
          type: 'error',
          message: 'Erreur de connexion avec GitHub'
        };
        this.showAlert = true;
      }
    });
  }

  loginWithFacebook(): void {
    this._authService.loginWithFacebook().subscribe({
      next: (response) => {
        this._router.navigate(['/dashboards']);
      },
      error: (error) => {
        this.alert = {
          type: 'error',
          message: 'Erreur de connexion avec Facebook'
        };
        this.showAlert = true;
      }
    });
  }

}
