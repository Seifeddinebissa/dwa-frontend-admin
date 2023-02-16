import { Admin } from './../model/admin.model';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

  const httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'}) 
  };

  @Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private apiUrl : string = 'http://localhost:9090/admin';

  constructor(private http : HttpClient){}

  listeAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl+'/listeAdmin');
  }

  ajouterAdmin(ad:Admin):Observable<Admin>{
    return this.http.post<Admin>(this.apiUrl+'/ajouterAdmin',ad,httpOptions);
  }

  supprimerAdmin(ad:Admin){
    let id = ad.idAdmin;
    const url=`${this.apiUrl}/supprimerAdmin/${id}`;
    return this.http.delete(url,httpOptions);
  }

  consulterAdmin(ad:Admin):Observable<Admin>{
    let id = ad.idAdmin;
    return this.http.get(`${this.apiUrl}/consulterAdmin/${id}`);
  }

  modifierAdmin(ad:Admin):Observable<Admin>{
    return this.http.put<Admin>(`${this.apiUrl}/modifierAdmin`, ad, httpOptions);
  }
}
