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
  searchedPokemon: string;

  constructor(
    public connService: ApiConnectionService,
    public filterService: SearchPokemonService,
    private http: HttpClient
  ) {
    this.searchedPokemon = "";
  }

  ngOnInit() {  }

  getPokemonSearched(pokemon: string) {
    this.filterService.getPokemon(pokemon);
  }

  generateFilteredList(){
    this.filterService.generateListFiltered();
  }
}
