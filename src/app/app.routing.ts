import{ Routes, RouterModule} from '@angular/router';
import{ LinhaTempoComponent } from './linha-tempo/linha-tempo.component';
import { NovoPostComponent } from './novo-post/novo-post.component';

const APP_ROUTES: Routes = [

    {path:"", redirectTo: "/linha-tempo", pathMatch:"full"},
    {path:"linha-tempo", component:LinhaTempoComponent},
    {path:"pagina-postar", component:NovoPostComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);