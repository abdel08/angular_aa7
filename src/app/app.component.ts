import { Component } from '@angular/core';
import { Statistique } from './Statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esgi-angular';
statistique = new Statistique (1,'nbre habitant',2,'fd');
statistiqueb = new Statistique (1,'ville ',2,'fd');

}
