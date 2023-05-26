import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [] 
})
export class ReservationComponent {
  // Déclaration d'un tableau de reservation
 // ! : le tableau n'est pas initialisé
 reservationTab!:any[]; 
 reservation:Reservation= new Reservation();// any : n'importe quel type de données
  findAllReservations: any;
 // DI : par constructeur  
 constructor(private reservationService:ReservationService){
 }
 ngOnInit(): void {
   this.findAllReservations();
 }
 findAllAvis(){
   // data : les données qui se trouvent dans le cache du navigateur
   this.reservationService.findAll().subscribe(data => {this.reservationTab = data});
 }
 saveAvis(){
   this.reservationService.save(this.reservation).subscribe(
     () => {
       // MAJ la liste des reservations
       this.findAllReservations();
       // Vider le formulaire
       this.reservation = new Reservation();
     }
   )
 }
 deleteAvis(id:number){
   this.reservationService.delete(id).subscribe(
     () => {
       this.findAllReservations();
     }
   )
 }
}
