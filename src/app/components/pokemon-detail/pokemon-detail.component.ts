import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectionService } from 'src/app/services/api-connection.service';
import { LoaderService } from 'src/app/services/loader.service';
import { SinglePokemonService } from 'src/app/services/single-pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  pokemon?: any;
  pokemonUrlNumber: number;

  constructor(
    private route: ActivatedRoute,
    public pokemonService: ApiConnectionService,
  ) {
    this.pokemonUrlNumber = 0;

    this.getPokemon();
  }

  getPokemon() {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.pokemonService.getSinglePokemon(id + 1).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log(pokemon)
      this.getPokemonUrlId(this.pokemon.id);
    })
  }

  getPokemonUrlId(id:number) {
    this.pokemonUrlNumber = id;
  }

  decreasePokemonUrlNumber() {
    this.pokemonUrlNumber -= 1;
  }
}
