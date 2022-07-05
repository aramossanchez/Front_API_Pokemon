import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-row-pokemon-listed',
  templateUrl: './row-pokemon-listed.component.html',
  styleUrls: ['./row-pokemon-listed.component.scss']
})
export class RowPokemonListedComponent implements OnInit {

  pokemonListed? : Pokemon;

  showingShiny : boolean = false;

  @Input()
  pokemon!: PokemonListed;

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.getPokemonByName(this.pokemon.name).subscribe(
      (res) =>{
        //OBTENGO POKEMON CON TODOS LOS DETALLES
        this.pokemonListed = (res);
        //SUMO 1 A LA CUENTA DE POKEMONS LISTADOS
        this.pokemonservice.increasePokemonCount();
        //OBTENGO TIPOS DEL POKEMON BUSCADO
        res.types.map((type) => {
          this.pokemonservice.setPokemonTypes(type.type.name);
        })
      },
      (error) => {
        console.error(error);
      }
    )
  }

  convert(unit:any) {
    return unit/10;
  }

  //CAMBIA IMAGEN DE POKEMON NORMAL O SHINY
  changeSprite(e:any) {
    e.stopPropagation();
    e.target.setAttribute(
      'style',
      `animation: hideImage 0.5s ease 0s 1, showImage 0.5s ease 0.5s 1;`,
    )
    setTimeout(() => {
      this.showingShiny = !this.showingShiny;      
    }, 250);
    setTimeout(() => {
      e.target.setAttribute(
        'style',
        `animation: "";`,
      )
    }, 1000);
  }
  
}
