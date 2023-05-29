import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

personne = "Salon";

// Property binding : du fichier ts --> html : [align] = "une variable"
alignement = "center"; // left | right | center

}
