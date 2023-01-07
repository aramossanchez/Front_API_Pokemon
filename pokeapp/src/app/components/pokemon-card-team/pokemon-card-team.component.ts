import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card-team',
  templateUrl: './pokemon-card-team.component.html',
  styleUrls: ['./pokemon-card-team.component.scss']
})
export class PokemonCardTeamComponent implements OnInit {

  @Input()
  pokemon!:Pokemon;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon);
  }

}
