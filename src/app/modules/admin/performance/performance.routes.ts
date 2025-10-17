import { Routes } from "@angular/router";
import { EntretiensComponent } from "./entretien/entretiens/entretiens.component";
import { ContratsComponent } from "./contrat/contrats/contrats.component";
import { IndicateursComponent } from "./indiccateur/indicateurs/indicateurs.component";

export default  [

    {
        path: '',
        children: [
            {
                path: 'entretiens',
                component: EntretiensComponent,
                data: { title: 'Entretiens' }
            },
            {
                path: 'contrats',
                component: ContratsComponent,
                data: { title: 'Contrats' }
            },
            {
                path: 'indicateurs',
                component: IndicateursComponent,
                data: { title: 'Indicateurs' }
            },
            {
                path: '',
                redirectTo: 'entretiens',
                pathMatch: 'full'
            }
        ]
    }

] as Routes