import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component} from '@angular/core';

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent {

  constructor(private modalService : NgbModal){}

  open(content :any){
    this.modalService.open(content);
  }

  close(){
    this.modalService.dismissAll();
  }
  
}
