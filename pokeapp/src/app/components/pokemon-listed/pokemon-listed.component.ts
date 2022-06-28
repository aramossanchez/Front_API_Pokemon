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
        this.pokemonListed = (res);
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
