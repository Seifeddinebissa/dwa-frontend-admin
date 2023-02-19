import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'ajouter-admin', component: AjouterAdminComponent},
  {path: 'listeAdmin', component : ListeAdminComponent},
  {path: 'ajouterCategorie', component: AjouterCategorieComponent},
  {path: 'listeCategorie', component: ListeCategorieComponent},
  {path: 'listeUtilisateur', component: ListeUtilisateurComponent},
  {path: 'ajouterUtilisateur', component: AjouterUtilisateurComponent},
  {path: 'listeContact', component: ListeContactComponent},
  {path: '', component: DashboardComponent, pathMatch:"full"},
  {path: 'listeAnnonce', component: ListeAnnonceComponent},
  {path : 'profile', component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
