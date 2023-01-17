import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SinglePokemonService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

}
