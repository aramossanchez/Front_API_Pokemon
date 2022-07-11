import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  
  pokemonList:PokemonListed[] = [{name: '', url: ''}];

  pokemonListSecurityCopy:PokemonListed[] = [{name: '', url: ''}];
  
  pokedexStatus: boolean = false;
  
  pokemon!: PokemonListed;
  
  pokemonTypes: string[] = [];
  
  //USADO PARA SABER CUANTOS POKEMON SE HAN CARGADO EN TOTAL, Y QUITAR EL SPINNER CUANDO COINCIDA CON EL MAXIMO DE POKEMON QUE SE CARGARÁN
  numberPokemonLoaded = 0;

  //NUMERO USADO PARA SABER CUANTOS POKEMON TOTALES APARECERÁN, Y QUITAR EL LOADER CUANDO COINCIDA CON EL NUMERO DE POKEMON CARGADOS
  numberPokemonListed = 0;

  filterOpen = false;

  filterParameter = null;
  
  //USADO PARA MOSTRAR VISTA MOSAICO O VISTA TABLA
  showMosaic = true;

  parameterSearch:string = "";

  arrayPokemonSearched:PokemonListed[] = [{name: '', url: ''}];
  
  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {

    this.pokemonservice.pokemonCount = 0;
    this.numberPokemonLoaded = 0;

    this.getAllPokemon();
    
  }

  //OBTENER LISTADO DE TODOS LOS POKEMON
  getAllPokemon() {
    this.pokemonservice.getPokemonList().subscribe(
      (res) => {
        this.pokemonList = res.results;
        this.pokemonListSecurityCopy = res.results;
        this.pokemonservice.setTotalPokemon(res.results.length);
        this.numberPokemonListed = this.pokemonservice.totalPokemon;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  //SELECCIONAR UN POKEMON
  selectionPokemon(pokemon:PokemonListed) {
    this.pokedexStatus = true;
    this.pokemon = pokemon;
  }

  changeStatusPokedex(e:any) {
    this.pokedexStatus = e;
  }

  //GUARDAR LOS TIPOS DE LOS POKEMON QUE SE HAN DEVUELTO DE LA API
  setPokemonTypes() {
    if(this.pokemonTypes.length === 0){
      this.pokemonTypes = this.pokemonservice.pokemonTypes;
    }
  }

  //SABER CUANTOS POKEMON SE HAN CARGADO EN PANTALLA
  getNumberPokemonLoaded() {
    this.numberPokemonLoaded = this.pokemonservice.pokemonCount;
  }

  //DEVUELVE CUANTOS POKEMON HAY CARGADOS EN PANTALLA
  paintNumberPokemonLoaded() {
    this.getNumberPokemonLoaded();
    return this.numberPokemonLoaded
  }

  //ABRIR O CERRAR EL FILTRO
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

  //AL SELECCIONAR UN FILTRO, HACE UNA BUSQUEDA CON LOS POKEMON DE ESE TIPO
  selectFilterParameter(e:any) {
    this.parameterSearch = "";
    this.numberPokemonLoaded = 0;
    this.filterParameter = e.target.innerHTML;
    let filterParameter = (e.target.innerHTML).toLowerCase()
    let arrayPokemonFiltered: PokemonListed[] = [];
    this.pokemonservice.getPokemonByType(filterParameter).subscribe(
      (res) => {
        res.pokemon.map((pokemonObject:any) => {
          let numberOfPokemon = pokemonObject.pokemon.url.charAt(34) + pokemonObject.pokemon.url.charAt(35) + pokemonObject.pokemon.url.charAt(36) + pokemonObject.pokemon.url.charAt(37) + pokemonObject.pokemon.url.charAt(38);
          let correctNumber = numberOfPokemon.split("/").join('');
          if(correctNumber <= 151){
            arrayPokemonFiltered.push(pokemonObject.pokemon);
          }
        })
        this.pokemonList = arrayPokemonFiltered;
        this.pokemonListSecurityCopy = arrayPokemonFiltered;
        this.pokemonservice.setTotalPokemon(arrayPokemonFiltered.length);
        this.numberPokemonListed = this.pokemonservice.totalPokemon;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  //BORRA EL FILTRO APLICADO ACTUALMENTE
  deleteFilterParameter(e:any) {
    e.stopPropagation();
    this.parameterSearch = "";
    this.numberPokemonLoaded = 0;
    this.filterParameter = null;
    this.getAllPokemon();
  }

  //CAMBIA ENTRE VISTA MOSAICO Y VISTA TABLA
  changeView() {
    this.pokemonservice.pokemonCount = 0;
    this.numberPokemonLoaded = 0;
    this.showMosaic = !this.showMosaic;
  }

  //GUARDA EL PARAMETRO QUE VAMOS A USAR PARA BUSCAR
  setParameterSearch(event:any) {
    this.arrayPokemonSearched = this.pokemonListSecurityCopy.filter(pokemon => pokemon.name.includes(this.parameterSearch.toLowerCase()));
    if (event.keyCode === 13) {
      this.searchPokemon();
    }
  }

  //GUARDA EN POKEMONLIST LA BUSQUEDA GUARDADA EN ARRAYPOKEMONSEARCHED(SIN TIMEOUT NO FUNCIONA)
  searchPokemon() {
    this.pokemonList = [];
    this.numberPokemonLoaded = 0;
    this.pokemonservice.pokemonCount = 0;
    this.pokemonservice.setTotalPokemon(this.arrayPokemonSearched.length);
    this.numberPokemonListed = this.pokemonservice.totalPokemon;
    setTimeout(() => {
      this.pokemonList = this.arrayPokemonSearched;
    }, 1);
  }

  //RESTAURA LA COPIA DE POKEMONLISTED, Y DEJA EN BLANCO EL INPUT DE BUSQUEDA
  deleteSearch() {
    this.parameterSearch = "";
    this.arrayPokemonSearched = this.pokemonListSecurityCopy;
    this.searchPokemon();
  }

}
