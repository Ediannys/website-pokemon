import { Component, ViewChild } from '@angular/core';
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

  parentMessage = "message from parent"

  message:string = "";

  ngAfterViewInit() {
    this.message = this.pokemonDescription.message;
    
  }

}
