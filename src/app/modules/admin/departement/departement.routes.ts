import { Component } from "@angular/core";
import { DepartementListeComponent } from "./departement-liste/departement-liste.component";
import { Routes } from "@angular/router";
import { DepartementFormComponent } from "./departement-form/departement-form.component";

export default  [
    {path: 'new', component: DepartementFormComponent},
    {path: '', component: DepartementListeComponent},
] as Routes;