import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  pokemon?: any;
  pokemonUrlNumber: number;
  previousPokemonId: number;
  nextPokemonId: number;

  constructor(
    private route: ActivatedRoute,
    public connService: ApiConnectionService,
  ) {
    this.pokemonUrlNumber = 0;
    this.previousPokemonId = 0;
    this.nextPokemonId = 0;

    this.getPokemon();
  }

  getPokemon() {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.connService.getSinglePokemon(id).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log(pokemon)
      this.getPokemonIdNumber(this.pokemon.id);
    })
  }

  getPokemonIdNumber(id: number) {
    this.pokemonUrlNumber = id;
    this.getPreviousId();
    this.getNextId();
  }

  getPreviousId() {
    this.previousPokemonId = this.pokemonUrlNumber - 1;
  }

  getNextId() {
    this.nextPokemonId = this.pokemonUrlNumber + 1;
  }
}
