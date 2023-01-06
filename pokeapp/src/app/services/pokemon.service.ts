import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonListed } from '../models/pokemonlisted.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {  

  constructor() { }

  async getPokemonList(): Promise<PokemonListed[]> {
    return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0%22')
    .then((response) => response.data.results);
  }

  async getPokemonListFullInformation(pokemon_name: string): Promise<Pokemon> {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then((response) => response.data);
  }

  async getTypes(): Promise<any> {
    return axios.get(`https://pokeapi.co/api/v2/type/`)
    .then((response) => response.data.results);
  }
}
