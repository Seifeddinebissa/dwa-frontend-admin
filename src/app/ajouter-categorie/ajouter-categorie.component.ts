import { Router } from '@angular/router';
import { CategorieService } from './../services/categorie.service';
import { Categorie } from './../model/categorie.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent {

  constructor(private categorieService : CategorieService, private router:Router){}

  cat = new Categorie();

  ajouterCategorie(){
    this.categorieService.ajouterCategorie(this.cat).subscribe(c => {
      console.log(c);
      this.router.navigate(["/listeCategorie"]);
    });
  }
}
