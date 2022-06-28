import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input()
  pokedexOpen!: boolean;
  @Output()
  sendPokedexStatus = new EventEmitter<boolean>()

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

  closePokedex(e:any){
    if(e.target?.className === 'container_pokedex'){
      this.pokedexOpen = !this.pokedexOpen;
      this.sendPokedexStatus.emit(this.pokedexOpen);
    }
  }

}
