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
  
  numberPokemonLoaded = 0;

  numberPokemonListed = 0;

  filterOpen = false;

  filterParameter = null;
  
  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {

    this.pokemonservice.pokemonCount = 0;
    this.numberPokemonLoaded = 0;

    this.getAllPokemon();
    
  }

  getAllPokemon() {
    this.pokemonservice.getPokemonList().subscribe(
      (res) => {
        this.pokemonList = res.results;
        this.pokemonservice.setTotalPokemon(res.results.length);
        this.numberPokemonListed = res.results.length;
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

  toggleFilter() {

    this.filterOpen = !this.filterOpen;
    let options = document.getElementsByClassName("option");

    if (!this.filterOpen) {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("option_opened");
      }
    } else {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.add("option_opened");
      }
    }

  }

  selectFilterParameter(e:any) {

    this.filterParameter = e.target.innerHTML;
    let filterParameter = (e.target.innerHTML).toLowerCase()
    let arrayPokemonFiltered: PokemonListed[] = [];

    this.pokemonservice.getPokemonByType(filterParameter).subscribe(
      (res) => {
        res.pokemon.map((pokemonObject:any) => {
          let numberOfPokemon = pokemonObject.pokemon.url.charAt(34) + pokemonObject.pokemon.url.charAt(35) + pokemonObject.pokemon.url.charAt(36);
          if(numberOfPokemon <= 151){
            arrayPokemonFiltered.push(pokemonObject.pokemon);
            console.log(numberOfPokemon);
          }
        })
        this.pokemonList = arrayPokemonFiltered;
        this.pokemonservice.setTotalPokemon(res.pokemon.length);
      },
      (error) => {
        console.error(error);
      }
    )

  }

  deleteFilterParameter(e:any) {
    e.stopPropagation();
    this.filterParameter = null;
    this.getAllPokemon();
  }

  test(){
    this.numberPokemonLoaded = 0;
    this.paintNumberPokemonLoaded(); 
  }

}
