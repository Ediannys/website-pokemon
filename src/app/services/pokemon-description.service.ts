import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { PokemonDescriptionModel } from '../models/pokemon-description.model';
import { AppConfig } from '../app.config';
import { PokemonModel } from '../models/pokemon-description.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonDescriptionService {
  apiUrl = AppConfig.settings.hosts.api;
  
  constructor(private http: HttpClient) {
  
   }
  public getPokemonDetail(element): Observable<PokemonModel> {
    return this.http.get<PokemonModel>(this.apiUrl + '/pokemon/' + element, {});
  }
}
