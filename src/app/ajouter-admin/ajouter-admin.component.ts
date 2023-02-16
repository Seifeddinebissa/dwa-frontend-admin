import { AdminService } from './../services/admin.service';
import { Admin } from './../model/admin.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit{

  newAdmin = new Admin();
  admins? : Admin[];
  
  constructor(private adminService : AdminService, private router : Router ){
      
  }
  
  ngOnInit(): void {
    /*this.adminService.listeAdmin().subscribe(prods =>{
      console.log(prods);
      this.admins = prods;
    });*/
  }

  ajouterAdmin(){
    this.adminService.ajouterAdmin(this.newAdmin).subscribe(ad=>{
      console.log(ad);
      this.router.navigate(["/listeAdmin"]);
    });
  }
  
}
