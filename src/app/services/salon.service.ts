import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { Salon } from '../models/salon/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

    private BASE_URL = "http://localhost:9090/salon";
  // HttpClient: un module qui nous permet d'utiliser les verbes http : GET.POST,PUT et DELETE
  constructor(private httpClient:HttpClient) { }
  // findAll --> verbe http GET --> url : BASE_URL --> Récupération des données avec la méthode Observable
  // Afficher la liste des salons
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
  // save --> verbe http POST --> url : BASE_URL + Body (salon)
  public save(salons:Salon):Observable<any>{
    return this.httpClient.post(this.BASE_URL,salons);
  }
  // delete --> verbe http DELETE --> url : BASE_URL/id
  // http://localhost:9090/salon/5
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
}
