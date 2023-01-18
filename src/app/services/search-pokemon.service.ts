import { Injectable } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {
  originalListPokemon: any[];
  pokemonListComplete: any[];
  // filteredList: any[];
  pokemonSearched: string;

  constructor(
    private apiService: ApiConnectionService,
    private http: HttpClient
  ) {
    this.pokemonSearched = "";
    this.originalListPokemon = [];
    this.pokemonListComplete = [];

    // this.filteredList = [];

    this.getAllPokemons();
  }

  getAllPokemons() {
    this.apiService.getAllPokemon()
      .subscribe((pokemonList: any) => {
        this.originalListPokemon = pokemonList.results;
        this.getAllPokemonComplete(this.originalListPokemon);
      });
  }

  getAllPokemonComplete(pokemonArray: any) {
    pokemonArray.forEach((pokemon: any) => {
      this.http.get(pokemon.url).subscribe((singlePokemon: any) => {
        this.pokemonListComplete.push(
          {
            "id": singlePokemon.id,
            "name": singlePokemon.name,
            "sprites": singlePokemon.sprites.front_default
          }
        );
      })
    });
    console.log(this.pokemonListComplete);
  }

  getPokemon(pokemon: string) {
    this.pokemonSearched = pokemon;
  }

  // filterPokemonArray(pokemonQuery: any) {
  //   this.filteredList = [];
  //   this.filteredList = this.originalListPokemon.results.filter((pokemon: any) => {
  //     return pokemon?.name.toLowerCase().includes(pokemonQuery.toLowerCase())
  //   })
  //   return this.filteredList;
  // }

  // generateListFiltered() {
  //   this.filteredList = this.filterPokemonArray(this.pokemonSearched);
  //   return this.filteredList;
  // }
}
