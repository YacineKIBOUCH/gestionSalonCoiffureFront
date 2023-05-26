import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
  providers:[]
})
export class AvisComponent implements OnInit {
  avis = {
     titre: '',
    description: ''};

   // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  avisTab!:any[];
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
    this.avisService.save(this.avis).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllAvis();
        // Vider le formulaire
        this.avis = {titre:'', description:''};
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
