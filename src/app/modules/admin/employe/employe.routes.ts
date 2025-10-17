import { Routes } from "@angular/router";
import { EmployeFormComponent } from "./employe-form/employe-form.component";
import { EmployeListComponent } from "./employe-list/employe-list.component";
import { FichesEmployeComponent } from "./fiches-employe/fiches-employe.component";
import { EmployeCongeComponent } from "./conge/employe-conge/employe-conge.component";
import { DepartementListeComponent } from "../departement/departement-liste/departement-liste.component";

export default  [

    {
        path: '',
        children: [
            {
                path: 'liste',
                component: EmployeListComponent,
                data: { title: 'Liste du Personnel' }
            },
            {
                path: 'ajouter',
                component: EmployeFormComponent,
                data: { title: 'Ajouter Employé' }
            },
            {
                path: 'fiches',
                component: FichesEmployeComponent,
                data: { title: 'Fiches Employés' }
            },
            {
                path: 'conges',
                component: EmployeCongeComponent,
                data: { title: 'Fiches Congés' }
            },


            {
                path: 'departements',
                component: DepartementListeComponent,
                data: { title: 'Fiches Congés' }
            },


            {
                path: '',
                redirectTo: 'liste',
                pathMatch: 'full'
            }
        ]
    }

] as Routes