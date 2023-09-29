import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitsComponentComponent } from './Components/list-produits-component/list-produits-component.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FournisseurComponentComponent } from './Components/fournisseur-component/fournisseur-component.component';

const routes: Routes = [
{path:'',component:HomePageComponent},
  { path: 'liste_produit', component: ListProduitsComponentComponent },
  {path:'first_founisseur',component:FournisseurComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
