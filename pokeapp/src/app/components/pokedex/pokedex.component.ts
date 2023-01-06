import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-Pokedex',
  templateUrl: './Pokedex.component.html',
  styleUrls: ['./Pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  @Input()
  pokemonSelected!:Pokemon;
  @Input()
  pokedexOpen!: boolean;
  @Output()
  sendPokedexStatus = new EventEmitter<boolean>()

  pokemonPokedex!: Pokemon;

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    console.log(this.pokemonSelected.moves);
    this.pokemonSelected.moves.map((move) => {
      console.log(move.move.name.replace(/-/g, ' ').toUpperCase());
    })
  }

  closePokedex(e:any){
    if(e.target?.className === 'container_pokedex'){
      this.pokedexOpen = !this.pokedexOpen;
      this.sendPokedexStatus.emit(this.pokedexOpen);
    }
  }

}
