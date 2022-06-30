import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-listed',
  templateUrl: './pokemon-listed.component.html',
  styleUrls: ['./pokemon-listed.component.scss']
})
export class PokemonListedComponent implements OnInit {

  pokemonListed?: Pokemon;

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
  
}
