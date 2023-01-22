import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss']
})
export class PokemonDescriptionComponent {
  @Input() childMessage: string = "";
  message = 'Hola Mundo!';
  showFiller = false;
}
