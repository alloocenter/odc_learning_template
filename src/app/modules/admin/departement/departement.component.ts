import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementService } from '../services/departement/departement.service';
import { MatDialog } from '@angular/material/dialog';
import { Departement } from '../models/employe.model';
import { DepartementFormComponent } from './departement-form/departement-form.component';
import { MaterialModules } from 'app/material-imports';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.scss'
})
export class DepartementComponent {

  
}
