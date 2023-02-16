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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AjouterAdminComponent,
    ListeAdminComponent,
    AjouterCategorieComponent,
    ListeCategorieComponent
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
