import { Routes } from "@angular/router";
import { PrimesComponent } from "./primes/primes.component";
import { AidesSocialesComponent } from "./aides-sociales/aides-sociales.component";
import { SanctionsComponent } from "./sanctions/sanctions.component";

export default [
    {
        path: '',
        children: [
            {
                path: 'primes',
                component: PrimesComponent,
                data: { title: 'Primes' }
            },
            {
                path: 'aides',
                component: AidesSocialesComponent,
                data: { title: 'Aides Sociales' }
            },
            {
                path: 'sanctions',
                component: SanctionsComponent,
                data: { title: 'Sanctions' }
            },
            {
                path: '',
                redirectTo: 'primes',
                pathMatch: 'full'
            }
        ]
    }
] as Routes;