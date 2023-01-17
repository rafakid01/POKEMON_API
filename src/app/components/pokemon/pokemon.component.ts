import { Component } from '@angular/core';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemonApiList: any;
  pokemonSprites: any[];

  constructor(
    public connService: ApiConnectionService,
  ) {
    this.pokemonApiList;
    this.pokemonSprites = [];

    this.getAllPokemon();
  }

  getAllPokemon() {
    this.connService.getAllPokemon()
      .subscribe((pokemon) => {
        this.pokemonApiList = pokemon;
        console.log(this.pokemonApiList);
        this.getSpriteUrl();
      });
    return this.pokemonApiList;
  }

  getSpriteUrl() {
    console.log(this.pokemonApiList.results.length)
    this.pokemonApiList.results.forEach((pokemon: any, index: number) => {
      this.pokemonSprites.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`)
    });
  }
}
