import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from 'src/app/modules/pokemon/pokemon.component';
import { PokemonListComponent } from 'src/app/modules/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDescriptionComponent } from 'src/app/modules/pokemon/pokemon-description/pokemon-description.component';
import { DefaultComponent } from './default.component';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: PokemonComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DefaultComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class DefaultModule { }
