import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { PokemonDescriptionComponent } from './pokemon-description/pokemon-description.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @ViewChild(PokemonDescriptionComponent) pokemonDescription;
  @ViewChild(PokemonListComponent) pokemonList;
  @ViewChild('drawer') drawer: ElementRef<HTMLInputElement> = {} as ElementRef
  flagDrawer: Boolean = false;
  parentMessage = "message from parent"
  message: string = "";
  ngAfterViewInit() {
    this.message = this.pokemonDescription.message;
  }
  receiveMessage($event) {
    console.log('Evento')
    this.flagDrawer = !this.flagDrawer;
  }
}
