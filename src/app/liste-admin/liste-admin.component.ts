import { Admin } from './../model/admin.model';
import { AdminService } from './../services/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListeAdminComponent implements OnInit{

  admins? : Admin[];
  admin = new Admin();
  constructor(private adminService : AdminService,private modalService: NgbModal){

  }
  open(content:any, ad:Admin) {
		this.modalService.open(content);
    this.adminService.consulterAdmin(ad).subscribe(a =>{
      console.log(a);
      this.admin = a;
    });
	}

  ngOnInit(): void {
    this.adminService.listeAdmin().subscribe(ads =>{
      console.log(ads);
      this.admins = ads;
    });
  }

  supprimerAdmin(ad:Admin){
    let conf = confirm("Êtes-vous sûr ?");
    if(conf)
      this.adminService.supprimerAdmin(ad).subscribe(() =>{
        console.log("admin supprimée");
      });
  }
  modifierAdmin(){
    this.adminService.modifierAdmin(this.admin).subscribe(a =>{
      console.log(a);
      this.modalService.dismissAll();
      this.ngOnInit();
    });
  }
}
