import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilityComponent } from './components/ability/ability.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Home" },
  { path: "ability", component: AbilityComponent, title: "Habilidades" },
  { path: "pokemons", component: PokemonComponent, title: "Pokemons" },
  { path: "pokemons/:id", component: PokemonDetailComponent, title: "Pokemon" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
