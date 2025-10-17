import { Routes } from "@angular/router";
import { MobiliteHorizontaleComponent } from "./mobilite-horizontale/mobilite-horizontale.component";
import { MobiliteVerticaleComponent } from "./mobilite-verticale/mobilite-verticale.component";
import { PlansSuccessionComponent } from "./plans-succession/plans-succession.component";

export default  [

    {
        path: '',
        children: [
            {
                path: 'horizontale',
                component: MobiliteHorizontaleComponent,
                data: { title: 'Mobilité Horizontale' }
            },
            {
                path: 'verticale',
                component: MobiliteVerticaleComponent,
                data: { title: 'Mobilité Verticale' }
            },
            {
                path: 'succession',
                component: PlansSuccessionComponent,
                data: { title: 'Plans de Succession' }
            },
            {
                path: '',
                redirectTo: 'horizontale',
                pathMatch: 'full'
            }
        ]
    }

] as Routes
