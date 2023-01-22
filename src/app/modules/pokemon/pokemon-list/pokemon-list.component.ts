import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() childMessage: string = "";
  @Output() messageEvent = new EventEmitter<Boolean>();
  message = 'Hola Mundo!';
  public drawerToggle(): void {
    this.messageEvent.emit(true)
  }
}
