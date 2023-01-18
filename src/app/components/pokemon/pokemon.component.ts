import { Component } from '@angular/core';
import { ApiConnectionService } from 'src/app/services/api-connection.service';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemonApiList: any[];
  searchedPokemon: string;

  constructor(
    public connService: ApiConnectionService,
    public filterService: SearchPokemonService,
    private http: HttpClient
  ) {
    this.pokemonApiList = [];
    this.searchedPokemon = "";
  }

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.connService.getAllPokemon().subscribe((pokemonsApi) => {
      // this.pokemonListArray = pokemonsApi;
      // this.pokemonListArray = this.filterService.generateListFiltered();
      // this.getAllPokemonComplete(this.pokemonListArray);
      // console.log(this.pokemonListArray);
    });
  }

  getPokemonSearched(pokemon: string) {
    this.filterService.getPokemon(pokemon);
  }

  
}
