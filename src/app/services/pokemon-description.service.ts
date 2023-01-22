import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { PokemonDescriptionModel } from '../models/pokemon-description.model';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class PokemonDescriptionService {
  apiUrl = AppConfig.settings.hosts.api;
  
  constructor(private http: HttpClient) {
  
   }
  public getPokemonDetail(element) {
    return this.http.get<PokemonDescriptionModel>(this.apiUrl + '/pokemon/' + element, {});
  }
}
