import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PokemonListComponent } from './views/pokemon-list/pokemon-list.component';
import { PokemonTeamComponent } from './views/pokemon-team/pokemon-team.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "pokelist", component: PokemonListComponent},
  {path: "poketeam", component: PokemonTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
