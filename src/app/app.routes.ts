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
    {path: '', pathMatch : 'full', redirectTo: 'dashboards'},

    // Redirect signed-in user to the '/dashboards/project'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
        ]
    },


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
