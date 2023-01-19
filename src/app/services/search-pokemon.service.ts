import { Injectable } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
import { HttpClient } from '@angular/common/http';
import { iif } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {
  originalListPokemon: any[];
  pokemonListComplete: any;
  pokemonSearched: string;

  constructor(
    private apiService: ApiConnectionService,
    private http: HttpClient
  ) {
    this.pokemonSearched = "";
    this.originalListPokemon = [];
    this.pokemonListComplete = [];

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
            "sprites": singlePokemon.sprites.front_default,
            "types": singlePokemon.types,
            "abilities": singlePokemon.abilities,
            "weight": singlePokemon.weight
          }
        );
      })
    });
  }

  getPokemon(pokemon: string) {
    this.pokemonSearched = pokemon;
  }

  generateListFiltered() {
    this.filterPokemonArray(this.pokemonSearched);
  }

  filterPokemonArray(pokemonQuery: any) {
    let filteredList = [];
    filteredList = this.pokemonListComplete.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(pokemonQuery.toLowerCase());
    })
    return filteredList;
  }
}
