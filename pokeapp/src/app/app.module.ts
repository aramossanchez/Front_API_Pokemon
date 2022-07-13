import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { PokemonListComponent } from './views/pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonListedComponent } from './components/pokemon-listed/pokemon-listed.component';
import { RowPokemonListedComponent } from './components/row-pokemon-listed/row-pokemon-listed.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectorComponent } from './components/selector/selector.component';
import { FormsModule } from '@angular/forms';
import { PokemonTeamComponent } from './views/pokemon-team/pokemon-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PokemonListComponent,
    PokemonListedComponent,
    RowPokemonListedComponent,
    PokedexComponent,
    SpinnerComponent,
    SelectorComponent,
    PokemonTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
