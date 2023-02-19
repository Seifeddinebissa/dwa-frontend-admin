import { Admin } from './../model/admin.model';
import { Categorie } from './../model/categorie.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from './../services/categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListeCategorieComponent implements OnInit{

  cat = new Categorie();
  categories? : Categorie[];

  constructor(private categorieService : CategorieService, private modalService : NgbModal){}

  ngOnInit(){
    this.listeCategorie();
  }

  open(content:any, c : Categorie) {
    this.modalService.open(content);
    this.categorieService.consulterCategorie(c).subscribe(o =>{
      console.log(o);
      this.cat = o;
    });
	}

  listeCategorie(){
    this.categorieService.listerCategorie().subscribe(cats => {
      console.log(cats);
      this.categories = cats;
    });
  }

  supprimerCategorie(cat : Categorie){
      let conf = confirm("Êtes-vous sûr ?");
      if(conf)
      this.categorieService.supprimerCategorie(cat).subscribe(()=>{
        console.log("categorie supprimée");
        this.ngOnInit();
      });
  }

  modifierCategorie(){
    this.categorieService.modifierCategorie(this.cat).subscribe(o =>{
      console.log(o);
      this.modalService.dismissAll();
      this.ngOnInit();
    });
  }

}
