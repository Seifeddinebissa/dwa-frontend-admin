import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AjouterAdminComponent,
    ListeAdminComponent,
    AjouterCategorieComponent,
    ListeCategorieComponent,
    ListeUtilisateurComponent,
    AjouterUtilisateurComponent,
    AjouterContactComponent,
    ListeContactComponent,
    DashboardComponent,
    ListeAnnonceComponent,
    AjouterAnnonceComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
