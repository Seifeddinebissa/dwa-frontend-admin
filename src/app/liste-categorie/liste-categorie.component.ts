import { Categorie } from './../model/categorie.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from './../services/categorie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListeCategorieComponent {

  cat = new Categorie();
  categories? : Categorie[];

  constructor(private CategorieService : CategorieService, private modalService : NgbModal){}

  open(content:any) {
		this.modalService.open(content);
   
	}

  listeCategorie(){
    this.CategorieService.listerCategorie().subscribe(cats => {
      console.log(cats);
      this.categories = cats;
    });
  }

}
