import { Component, Input } from '@angular/core';
import { PokemonDescriptionModel, PokemonModel } from 'src/app/models/pokemon-description.model';
import { PokemonDescriptionService } from 'src/app/services/pokemon-description.service';
@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss']
})
export class PokemonDescriptionComponent {
  @Input() childMessage: string = "";
  pokemon: PokemonDescriptionModel;
  flagShowPokemon = false;

  constructor(private pokemonDescriptionService: PokemonDescriptionService) { }

  ngOnChanges() {
    if (this.childMessage) {
      this.getPokemonDetail();
    }
  }
  public getPokemonDetail() {
    this.flagShowPokemon = false;
    this.pokemonDescriptionService.getPokemonDetail(this.childMessage).subscribe((response: PokemonModel) => {
      this.pokemon = PokemonDescriptionModel.getPokemon(response);
      this.flagShowPokemon = true;
      console.log(this.pokemon)
    }, error => {
      console.log(error);
      this.flagShowPokemon = false;
    })
  }

}
