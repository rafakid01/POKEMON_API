import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  readonly pokemonApi: string;
  readonly singlePokemonUrl: string;
  readonly allAbilities: string;

  constructor(
    private http: HttpClient
  ) {
    this.pokemonApi = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=905";
    this.singlePokemonUrl = "https://pokeapi.co/api/v2/pokemon";
    this.allAbilities = "https://pokeapi.co/api/v2/ability?offset=0&limit=320";
  }

  getAllPokemon() {
    return this.http.get(`${this.pokemonApi}`);
  }

  getSinglePokemon(id: number) {
    return this.http.get(`${this.singlePokemonUrl}/${id}`)
  }

  getAllAbilities() {
    return this.http.get(`${this.allAbilities}`)
  }
}
