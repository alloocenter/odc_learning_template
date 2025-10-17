import { Routes } from "@angular/router";
import { AffectationsComponent } from "./affectation/affectations/affectations.component";
import { PromotionsComponent } from "./promotion/promotions/promotions.component";
import { RetraitesComponent } from "./retraite/retraites/retraites.component";

export default  [

    {
        path: '',
        children: [
            {
                path: 'affectations',
                component: AffectationsComponent,
                data: { title: 'Affectations' }
            },
            {
                path: 'promotions',
                component: PromotionsComponent,
                data: { title: 'Promotions' }
            },
            {
                path: 'retraites',
                component: RetraitesComponent,
                data: { title: 'Retraites' }
            },
            {
                path: '',
                redirectTo: 'affectations',
                pathMatch: 'full'
            }
        ]
    }
    
] as Routes