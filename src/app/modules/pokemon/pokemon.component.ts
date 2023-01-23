import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { PokemonDescriptionComponent } from './pokemon-description/pokemon-description.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonNameModel } from 'src/app/models/pokemon-list.model';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @ViewChild(PokemonDescriptionComponent) pokemonDescription;
  @ViewChild(PokemonListComponent) pokemonList;
  @ViewChild('drawer') drawer: ElementRef<HTMLInputElement> = {} as ElementRef
  flagDrawer: Boolean = true;
  parentMessage = "message from parent"
  message: string = "";
  ngAfterViewInit() {
    this.message = this.pokemonDescription.message;
  }
  receiveMessage(element: PokemonNameModel) {

    if(element){
      this.parentMessage = element.name;
      if(this.flagDrawer){ this.flagDrawer = false}
    }

  }
}
