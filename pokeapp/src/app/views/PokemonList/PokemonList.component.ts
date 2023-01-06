import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-PokemonList',
  templateUrl: './PokemonList.component.html',
  styleUrls: ['./PokemonList.component.scss']
})
export class PokemonListComponent implements OnInit {

  //LISTA CON TODOS LOS POKEMONS, CON TODA LA INFORMACION COMPLETA DE CADA UNO
  pokemonList:Pokemon[] = []; 

  //LISTA CON TODOS LOS POKEMONS, CON TODA LA INFORMACION COMPLETA DE CADA UNO (COPIA PARA FILTRAR)
  pokemonListFilter:Pokemon[] = []; 
  
  //ESTADO DE LA POKEDEX (ABIERTA O CERRADA)
  pokedexOpen: boolean = false;
  
  //LISTADO DE LOS TIPOS DE POKEMON, USADO PARA EL FILTRO POR TIPOS
  pokemonTypes: string[] = [];

  //POKEMON ELEGIDO PARA VER SU POKEDEX
  pokemon!: Pokemon;

  //TIPO ELEGIDO PARA FILTRAR
  typeForFilter: string = ""

  //DETERMINA SI EL LOADER ESTÁ ACTIVO O NO
  loading = true;

  filterOpen = false;
  
  //USADO PARA MOSTRAR VISTA MOSAICO O VISTA TABLA
  showMosaic = true;

  //PALABRA USADA PARA BUSCAR
  parameterSearch:string = "";

  //USADO PARA GESTIONAR EL ORDEN EN QUE SE ORDENAN LOS REGISTROS DE LA TABLA AL PULSAR EL BOTON PARA ORDENAR
  orderASC!:boolean;
  
  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
    this.obtainTypes();
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
      this.pokemonListFilter = pokemonListFullInformation;
      setTimeout(() => {
        this.loading = false;        
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  async obtainTypes() {
    try {
      const pokemonTypes = await this.pokemonservice.getTypes();
      pokemonTypes.map((type:any) => {
        this.pokemonTypes.push(type.name);
      })
    } catch (error) {
      console.log(error)
    }
  }

  //ABRIR POKEDEX
  changeStatusPokedex() {
    this.pokedexOpen = !this.pokedexOpen;
  }

  //SELECCIONAR POKEMON PARA LA POKEDEX
  pokemonForPokedex(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  // ABRIR O CERRAR EL FILTRO
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

  //SELECCIONAR FILTRO
  async setTypeForFilter(filter: string) {
    this.deleteSearch();
    let pokemonListFiltered: Pokemon[] = []
    this.pokemonListFilter.map((pokemon) => {
      pokemon.types.map((type) => {
        if(type.type.name === filter) {
          pokemonListFiltered.push(pokemon);
        }
      });
    });
    this.pokemonListFilter = pokemonListFiltered;
    this.typeForFilter = filter;
  }

  //RECARGA LA LISTA DE POKEMON PARA VER LOS RESULTADOS FILTRADOS CON LA ORIGINAL
  async reloadPokemonList() {
    this.pokemonListFilter = this.pokemonList;
  }

  //RESETEAR EL FILTRADO Y VOLVER A MOSTRAR TODO EL LISTADO DE POKEMON
  resetFilter() {
    this.typeForFilter = '';
  }

  //GUARDA EL PARAMETRO QUE VAMOS A USAR PARA BUSCAR
  setParameterSearch() {
    this.resetFilter();
    this.pokemonListFilter = this.pokemonList.filter(pokemon => pokemon.name.includes(this.parameterSearch.toLowerCase()));
  }

  //RESETEAR RESULTADO DE BUSQUEDA Y MOSTRAR TODO EL LISTADO DE POKEMON DE NUEVO
  deleteSearch() {
    this.parameterSearch = "";
    this.reloadPokemonList();
  }

  //CAMBIA ENTRE VISTA MOSAICO Y VISTA TABLA
  // changeView() {
  //   this.pokemonservice.pokemonCount = 0;
  //   this.numberPokemonLoaded = 0;
  //   this.showMosaic = !this.showMosaic;
  // }

  //ORDENAR REGISTROS DE TABLA
  // orderRegisters(data:string) {
  //   if (this.orderASC === null) {
  //     this.orderASC = false;
  //   }
  //   this.orderASC = !this.orderASC;
  //   if (this.orderASC) {
  //     this.pokemonList.sort(function (a:any, b:any) {
  //       if (a[data] > b[data]) {
  //         return 1;
  //       }
  //       if (a[data] < b[data]) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   }
  //   if (!this.orderASC) {
  //     this.pokemonList.sort(function (a:any, b:any) {
  //       if (a[data] > b[data]) {
  //         return -1;
  //       }
  //       if (a[data] < b[data]) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   }
  // }

}
