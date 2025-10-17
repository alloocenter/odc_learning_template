import { Routes } from "@angular/router";
import { PyramideAgesComponent } from "./pyramide-ages/pyramide-ages.component";
import { RepartitionComponent } from "./repartition/repartition.component";
import { RapportsComponent } from "./rapports/rapports.component";

export default  [

    {
        path: '',
        children: [
            {
                path: 'pyramide',
                component: PyramideAgesComponent,
                data: { title: 'Pyramide des Âges' }
            },
            {
                path: 'repartition',
                component: RepartitionComponent,
                data: { title: 'Répartition' }
            },
            {
                path: 'rapports',
                component: RapportsComponent,
                data: { title: 'Rapports' }
            },
            {
                path: '',
                redirectTo: 'pyramide',
                pathMatch: 'full'
            }
        ]
    }

] as Routes