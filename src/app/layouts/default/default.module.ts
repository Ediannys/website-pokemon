import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from 'src/app/modules/pokemon/pokemon.component';
import { PokemonListComponent } from 'src/app/modules/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDescriptionComponent } from 'src/app/modules/pokemon/pokemon-description/pokemon-description.component';
import { DefaultComponent } from './default.component';
import {Routes, RouterModule} from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
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
    RouterModule.forChild(routes),
    SharedModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DefaultModule { }
