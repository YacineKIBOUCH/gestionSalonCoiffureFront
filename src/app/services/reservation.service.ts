import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  private BASE_URL = "http://localhost:9090/reservations";
  // HttpClient: un module qui nous permet d'utiliser les verbes http : GET.POST,PUT et DELETE
  constructor(private httpClient:HttpClient) { }
  // findAll --> verbe http GET --> url : BASE_URL --> Récupération des données avec la méthode Observable
  // Afficher la liste des salons
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
  // save --> verbe http POST --> url : BASE_URL + Body (reservation)
  public save(reservations:Reservation):Observable<any>{
    return this.httpClient.post(this.BASE_URL,reservations);
  }
  // delete --> verbe http DELETE --> url : BASE_URL/id
  // http://localhost:9090/reservation/5
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
}
