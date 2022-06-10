import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemonlist-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0%22');
  }

  getPokemonByName(name:string) : Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
