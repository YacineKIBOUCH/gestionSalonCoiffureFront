import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { UtilisateurService } from './services/utilisateur.service';
import {HttpClientModule} from '@angular/common/http';
import { AvisComponent } from './avis/avis/avis.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { AvisService } from './services/avis.service';
import { ReservationService } from './services/reservation.service';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    MyDirectiveDirective,
    SqrtPipe,
    AvisComponent,
    ReservationComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,  // [(ngModel)] : Two-way DataBinding
    HttpClientModule,
     // Pour utiliser les verbes http : GET,POST,PUT,DELETE
    AppRoutingModule
  ],
  providers: [UtilisateurService,
    AvisService,
    ReservationService
   ], // Les services
  bootstrap: [AppComponent]
})
export class AppModule { }
