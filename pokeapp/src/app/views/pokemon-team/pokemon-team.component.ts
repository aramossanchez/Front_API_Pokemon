import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {

  //LISTA CON TODOS LOS POKEMONS, SOLO CON NOMBRE Y URL
  pokemonList:PokemonListed[] = [{name: '', url: ''}];

  //LISTA CON TODOS LOS POKEMONS, CON TODA LA INFORMACION COMPLETA DE CADA UNO
  pokemonListFull:Pokemon[] = [];
  
  pokemon!: Pokemon;

  //ARRAY DONDE GUARDAR LOS POKEMON SELECCIONADOS
  pokemonSelectedList:any = [{pokemon: 'vacio'}, {pokemon: 'vacio'}, {pokemon: 'vacio'}, {pokemon: 'vacio'}, {pokemon: 'vacio'}, {pokemon: 'vacio'}];

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  //OBTENER LISTADO DE TODOS LOS POKEMON
  getAllPokemon() {
    this.pokemonservice.getPokemonList().subscribe(
      (res) => {
        this.pokemonList = res.results;
        this.getAllPokemonFull()
      },
      (error) => {
        console.error(error);
      }
    )
  }

  //GUARDAR LISTADO CON INFORMACION COMPLETA DE CADA POKEMON
  getAllPokemonFull() {

    //ARRAY PARA IR GUARDANDO LOS RESULTADOS
    let pokemonListFullPre:Pokemon[] = [];

    //RECORRO CADA POKEMON PARA OBTENER LA INFORMACION COMPLETA DE CADA UNO
    this.pokemonList.map((pokemon) => {
      this.pokemonservice.getPokemonByName(pokemon.name).subscribe(
        (res) => {
          pokemonListFullPre.push(res);
          //CUANDO HA GUARDADO TODOS LOS POKEMONS, LOS ORDENO Y LOS GUARDO EN EL ARRAY DEFINITIVO
          if (this.pokemonList.length == pokemonListFullPre.length) {
            pokemonListFullPre.sort(function (a:any, b:any) {
              if (a['id'] > b['id']) {
                return 1;
              }
              if (a['id'] < b['id']) {
                return -1;
              }
              return 0;
            });
            this.pokemonListFull = pokemonListFullPre;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  addPokemonTeam(pokemon:Pokemon) {
    //COMPRUEBA CUAL ES EL PRIMER HUECO DEL ARRAY DE POKEMON DEL EQUIPO QUE ESTÁ VACIO
    const index = this.pokemonSelectedList.findIndex((selected: { pokemon: string; }) => {
      return selected.pokemon === 'vacio'
    })
    //COMPRUEBA SI EL POKEMON ELEGIDO YA HA SIDO GUARDADO EN EL ARRAY DEL EQUIPO
    const indexPokemonExist = this.pokemonSelectedList.findIndex((selectedExist:Pokemon) => {
      return selectedExist.id === pokemon.id
    })
    if (index != -1 && indexPokemonExist === -1) {
      this.pokemonSelectedList[index] = pokemon;
    }
  }

  deletePokemonTeam(pokemon:Pokemon) {
    const index = this.pokemonSelectedList.findIndex((deleted:Pokemon) => {
      return deleted.id === pokemon.id
    })
    if (index != -1) {
      this.pokemonSelectedList[index] = {pokemon: 'vacio'};
    }
  }

}
