import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  @Input()
  pokemonSelected!:PokemonListed;

  pokemonPokedex!: Pokemon;

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.getPokemonByName(this.pokemonSelected.name).subscribe(
      (res) =>{
        this.pokemonPokedex = (res);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
