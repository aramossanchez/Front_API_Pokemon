import { Component, OnInit } from '@angular/core';
import { PokemonListed } from 'src/app/models/pokemonlisted.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList?:PokemonListed[];

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.getPokemonList().subscribe(
      (res) => {
        console.log(res); this.pokemonList = res.results;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}