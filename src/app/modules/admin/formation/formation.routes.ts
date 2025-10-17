import { Routes } from "@angular/router";
import { PlanFormationComponent } from "./plan-formation/plan-formation.component";
import { SessionsFormationComponent } from "./sessions-formation/sessions-formation.component";
import { AutoEvaluationComponent } from "./auto-evaluation/auto-evaluation.component";

export default  [

    {
        path: '',
        children: [
            {
                path: 'plan',
                component: PlanFormationComponent,
                data: { title: 'Plan de Formation' }
            },
            {
                path: 'sessions',
                component: SessionsFormationComponent,
                data: { title: 'Sessions de Formation' }
            },
            {
                path: 'auto-evaluation',
                component: AutoEvaluationComponent,
                data: { title: 'Auto-évaluation' }
            },
            {
                path: '',
                redirectTo: 'plan',
                pathMatch: 'full'
            }
        ]
    }

] as Routes