import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-listed-team',
  templateUrl: './pokemon-listed-team.component.html',
  styleUrls: ['./pokemon-listed-team.component.scss']
})
export class PokemonListedTeamComponent implements OnInit {

  pokemonListed!:Pokemon;

  @Input()
  pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
    this.pokemonListed = this.pokemon;
  }

  convert(unit:any) {
    return unit/10;
  }

}
