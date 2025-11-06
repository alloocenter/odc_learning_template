import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [

            // Dashboards
            {path: 'dashboards', loadChildren: () => import('app/modules/admin/dashboards/dashboards.routes')},
            
            // Gestion du Personnel
            {path: 'personnels', loadChildren: () => import('app/modules/admin/employe/employe.routes')},

            {path: 'departements', loadChildren: () => import('app/modules/admin/departement/departement.routes')},

            // Gestion des Carrières
            {path: 'carrieres', loadChildren: () => import('app/modules/admin/carriere/carriere.routes')},

            // Performances
            {path: 'performances', loadChildren: () => import('app/modules/admin/performance/performance.routes')},

            // Mobilité
            {path: 'mobilite', loadChildren: () => import('app/modules/admin/mobilite/mobilite.routes')},

            // Récompenses & Sanctions
            {path: 'recompenses', loadChildren: () => import('app/modules/admin/recompense/recompense.routes')},

            // Formation
            {path: 'formation', loadChildren: () => import('app/modules/admin/formation/formation.routes')},

            // Statistiques RH
            {path: 'statistiques', loadChildren: () => import('app/modules/admin/statistique/statistique.routes')},

            // Route 404 - Redirection vers le dashboard
            {path: '**', redirectTo: 'dashboards'}

        ]
    }
];
