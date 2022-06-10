import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "pokelist", component: PokemonListComponent},
  {path: "poketeam", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
