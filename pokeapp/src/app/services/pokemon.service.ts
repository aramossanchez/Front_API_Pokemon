import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemonlist-response.interface';
import { Pokemon } from '../models/pokemon.model';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonTypes : string[] = [];
  totalPokemon = 0;
  pokemonCount = 0;
  

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse> {
    this.pokemonCount = 0;
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0%22');
  }

  getPokemonByName(name:string) : Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemonByType(type:string) : Observable<any> {
    this.pokemonCount = 0;
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }

  setPokemonTypes(type:string) {
    if (!this.pokemonTypes.find(item => item === type)) {
      this.pokemonTypes.push(type);
    }
  }

  setTotalPokemon(number:number) {
    this.totalPokemon = number;
  }

  increasePokemonCount() {
    this.pokemonCount ++;
  }

  getMove(url:string) : Observable<any> {
    return this.http.get<any>(url);
  }
}
