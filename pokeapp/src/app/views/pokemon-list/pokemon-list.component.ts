import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  
  pokemonList?:PokemonListed[];
  
  pokedexStatus: boolean = false;
  
  pokemon!: PokemonListed;
  
  pokemonTypes: string[] = [];
  
  numberPokemonLoaded = 0
  
  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {

    this.pokemonservice.pokemonCount = 0;
    this.numberPokemonLoaded = 0;

    this.pokemonservice.getPokemonList().subscribe(
      (res) => {
        this.pokemonList = res.results;
        this.pokemonservice.setTotalPokemon(res.results.length);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  selectionPokemon(pokemon:PokemonListed) {
    this.pokedexStatus = true;
    this.pokemon = pokemon;
  }

  changeStatusPokedex(e:any) {
    this.pokedexStatus = e;
  }

  setPokemonTypes() {
    if(this.pokemonTypes.length === 0){
      this.pokemonTypes = this.pokemonservice.pokemonTypes;
    }
  }

  getNumberPokemonLoaded() {
    this.numberPokemonLoaded = this.pokemonservice.pokemonCount;
  }

  paintNumberPokemonLoaded() {
    this.getNumberPokemonLoaded();
    return this.numberPokemonLoaded
  }

}
