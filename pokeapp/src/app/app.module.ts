import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/Header/Header.component';
import { PokemonListComponent } from './views/PokemonList/PokemonList.component';
import { PokemonService } from './services/pokemon.service';
import { PokedexComponent } from './components/Pokedex/Pokedex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { YourTeamComponent } from './views/YourTeam/YourTeam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PokemonListComponent,
    PokedexComponent,
    SpinnerComponent,
    PokemonCardComponent,
    YourTeamComponent,
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
