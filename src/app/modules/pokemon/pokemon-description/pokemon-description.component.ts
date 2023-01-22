import { Component, Input, OnInit } from '@angular/core';
import { PokemonDescriptionModel } from 'src/app/models/pokemon-description.model';
import { PokemonDescriptionService } from 'src/app/services/pokemon-description.service';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss']
})
export class PokemonDescriptionComponent implements OnInit {
  @Input() childMessage: string = "";
  message = 'Hola Mundo!';
  showFiller = false;

  constructor(private pokemonDescriptionService: PokemonDescriptionService) { }

  ngOnInit() {
    this.getPokemonDetail();
   }


  public getPokemonDetail() {
    this.pokemonDescriptionService.getPokemonDetail('charizard').subscribe(response => { console.log(response)}, error => {
      console.log(error)
    })
  }

}
