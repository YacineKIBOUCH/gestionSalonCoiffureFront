import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RoleComponent } from './role/role.component';
import { FormsModule } from '@angular/forms';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { UtilisateurService } from './services/utilisateur.service';
import {HttpClientModule} from '@angular/common/http';
import { AvisComponent } from './avis/avis/avis.component';
import { PrestationComponent } from './prestation/prestation/prestation.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { SalonComponent } from './salon/salon/salon.component';
import { AvisService } from './services/avis.service';
import { ReservationService } from './services/reservation.service';
import { PrestationService } from './services/prestation.service';
import { SalonService } from './services/salon.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    RoleComponent,
    MyDirectiveDirective,
    SqrtPipe,
    AvisComponent,
    PrestationComponent,
    ReservationComponent,
    SalonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // [(ngModel)] : Two-way DataBinding
    HttpClientModule // Pour utiliser les verbes http : GET,POST,PUT,DELETE
  ],
  providers: [UtilisateurService,
    AvisService,
    ReservationService,
    SalonService,
    PrestationService
   ], // Les services
  bootstrap: [AppComponent]
})
export class AppModule { }
