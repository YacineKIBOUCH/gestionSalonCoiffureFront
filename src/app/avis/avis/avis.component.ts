import { Component, OnInit } from '@angular/core';
import { Avis } from 'src/app/models/avis/avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
  providers:[]
})
export class AvisComponent implements OnInit {


   // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  avisTab!:any[];
  av:Avis=new Avis();
 // any : n'importe quel type de données
  // DI : par constructeur  
  constructor(private avisService:AvisService){
  }
  ngOnInit(): void {
    this.findAllAvis();
  }
  findAllAvis(){
    // data : les données qui se trouvent dans le cache du navigateur
    this.avisService.findAll().subscribe(data => {this.avisTab = data});
  }
  saveAvis(){
    this.avisService.save(this.av).subscribe(
      () => {
        // MAJ la liste des avis
        this.findAllAvis();
        // Vider le formulaire
        this.av = new Avis();
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvis();
      }
    )
  }
  

}
