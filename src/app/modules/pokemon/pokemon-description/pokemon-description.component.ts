import { Component, Input, OnInit } from '@angular/core';
import { PokemonDescriptionModel, PokemonModel } from 'src/app/models/pokemon-description.model';
import { PokemonDescriptionService} from 'src/app/services/pokemon-description.service';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss']
})
export class PokemonDescriptionComponent implements OnInit {
  @Input() childMessage: string = "";
  message = 'Hola Mundo!';
  showFiller = false;
  pokemon: PokemonDescriptionModel;

  constructor(private pokemonDescriptionService: PokemonDescriptionService) { }

  ngOnInit() {
    this.getPokemonDetail();
   }


  public getPokemonDetail() {
    this.pokemonDescriptionService.getPokemonDetail('charizard').subscribe( (response: PokemonModel) => { 
      this.pokemon = PokemonDescriptionModel.getPokemon(response);
      console.log(response)}, error => {
      console.log(error)
    })
  }

}
