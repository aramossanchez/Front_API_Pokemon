import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PokemonListComponent } from './views/PokemonList/PokemonList.component';
import { YourTeamComponent } from './views/YourTeam/YourTeam.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "pokelist", component: PokemonListComponent},
  {path: "yourteam", component: YourTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
