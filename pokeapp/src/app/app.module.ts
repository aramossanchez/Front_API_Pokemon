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
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PokemonListComponent,
    PokemonListedComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
