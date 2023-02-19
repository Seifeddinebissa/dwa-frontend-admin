import { Observable } from 'rxjs';
import { Categorie } from './../model/categorie.model';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'}) 
};

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl : string = 'http://localhost:9090/categorie';

  constructor(private http : HttpClient) { }

  ajouterCategorie(cat : Categorie):Observable<Categorie>{
    return this.http.post<Categorie>(`${this.apiUrl}/ajouterCategorie`, cat, httpOptions);
  }

  listerCategorie():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiUrl}/listeCategorie`);
  }

  supprimerCategorie(cat : Categorie){
    let id = cat.idCategorie;
    return this.http.delete(`${this.apiUrl}/supprimerCategorie/${id}`);
  }

  modifierCategorie(cat : Categorie):Observable<Categorie>{
    return this.http.put<Categorie>(`${this.apiUrl}/modifierCategorie`, cat, httpOptions)
  }

  consulterCategorie(cat : Categorie):Observable<Categorie>{
    let id = cat.idCategorie;
    return this.http.get(`${this.apiUrl}/consulterCategorie/${id}`);
  }
}
