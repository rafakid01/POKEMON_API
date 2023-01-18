import { Component } from '@angular/core';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  searchedPokemon: string;

  constructor(
    private searchService: SearchPokemonService,
  ){
    this.searchedPokemon = "";
  }

  getPokemonSearched(pokemon: string){
    this.searchService.getPokemon(pokemon);
  }
}
