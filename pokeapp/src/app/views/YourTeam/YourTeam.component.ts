import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-YourTeam',
  templateUrl: './YourTeam.component.html',
  styleUrls: ['./YourTeam.component.scss']
})
export class YourTeamComponent implements OnInit {
  
  //LISTA CON TODOS LOS POKEMONS, CON TODA LA INFORMACION COMPLETA DE CADA UNO
  pokemonList:Pokemon[] = [];

  //DETERMINA SI EL LOADER ESTÁ ACTIVO O NO
  loading = true;

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  //OBTENER LISTADO DE TODOS LOS POKEMON
  async getAllPokemon() {
    let pokemonListFullInformation:Pokemon[] = [];
    try {
      const res = await this.pokemonservice.getPokemonList();
      res.map(async(pokemonWithUrl) => {
        const pokemonFullInformation = await this.pokemonservice.getPokemonListFullInformation(pokemonWithUrl.name);
        pokemonListFullInformation.push(pokemonFullInformation);
      });
      this.pokemonList = pokemonListFullInformation;
      setTimeout(() => {
        this.loading = false;        
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

}
