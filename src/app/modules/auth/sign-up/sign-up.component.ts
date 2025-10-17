import { NgForOf, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { Departement } from 'app/modules/admin/models/employe.model';
import { AuthService } from 'app/modules/admin/services/auth/auth.service';
import {ImageCroppedEvent, ImageCropperComponent } from "ngx-image-cropper";


@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, ImageCropperComponent, MatOptionModule, MatSelectModule, NgForOf],
})
export class AuthSignUpComponent implements OnInit {

  @ViewChild('signUpNgForm') signUpNgForm: NgForm;

  signUpForm: FormGroup;
  showPassword = false;
  showAlert = false;
  saving: boolean = false;
  alert: { type: FuseAlertType; message: string } = {
    type: 'error',
    message: ''
  };

  imageFile: any;
  imageChangedEvent: any;
  @ViewChild("imagePicker") imagePicker: ElementRef;
  departements: Departement[] = [];


  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: [null, Validators.required],
      departement: [null, Validators.required],
      poste: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      agreements: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
    
    return null;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  pickImage() {
        this.imagePicker.nativeElement.click();
    }
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.imageFile = event.blob;
        // this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
        // event.blob can be used to upload the cropped image
    }
    

  signUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.signUpForm.disable();
    this.showAlert = false;

    const formValue = this.signUpForm.value;

    this._authService.signUp(formValue).subscribe({
      next: (response) => {
        this.alert = {
          type: 'success',
          message: 'Inscription réussie! Vous pouvez maintenant vous connecter.'
        };
        this.showAlert = true;
        
        // Redirection vers la page de connexion après 2 secondes
        setTimeout(() => {
          this._router.navigate(['/sign-in']);
        }, 2000);
      },
      error: (error) => {
        this.signUpForm.enable();
        this.alert = {
          type: 'error',
          message: error.message || "Une erreur est survenue lors de l'inscription"
        };
        this.showAlert = true;
      }
    });
  }

}
