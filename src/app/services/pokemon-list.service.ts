import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { AppConfig } from '../app.config';
import { PokemonListModel } from '../models/pokemon-list.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  apiUrl = AppConfig.settings.hosts.api;
  
  constructor(private http: HttpClient) {
  
   }
  public getAllPokemon(): Observable<PokemonListModel> {
    return this.http.get<PokemonListModel>(this.apiUrl + '/pokemon', {});
  }
}
