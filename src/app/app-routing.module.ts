import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';

const routes: Routes = [
  {path: 'ajouter-admin', component: AjouterAdminComponent},
  {path: 'listeAdmin', component : ListeAdminComponent},
  {path: 'ajouterCategorie', component: AjouterCategorieComponent},
  {path: 'listeCategorie', component: ListeCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
