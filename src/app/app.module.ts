import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './modules/pokemon/pokemon.component';
import { PokemonListComponent } from './modules/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDescriptionComponent } from './modules/pokemon/pokemon-description/pokemon-description.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDescriptionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
