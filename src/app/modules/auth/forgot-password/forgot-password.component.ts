import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/modules/admin/services/auth/auth.service';
import { finalize } from 'rxjs';

@Component({
    selector     : 'auth-forgot-password',
    templateUrl  : './forgot-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, RouterLink],
})
export class AuthForgotPasswordComponent implements OnInit
{
    forgotPasswordForm: FormGroup;
  showAlert = false;
  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendResetLink(): void {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.forgotPasswordForm.disable();
    this.showAlert = false;

    const email = this.forgotPasswordForm.get('email').value;

    this._authService.forgotPassword(email).subscribe({
      next: (response) => {
        this.alert = {
          type: 'success',
          message: 'Un email de réinitialisation a été envoyé à votre adresse.'
        };
        this.showAlert = true;
      },
      error: (error) => {
        this.forgotPasswordForm.enable();
        this.alert = {
          type: 'error',
          message: error.message || "Une erreur est survenue lors de l'envoi de l'email"
        };
        this.showAlert = true;
      }
    });
  }


}
