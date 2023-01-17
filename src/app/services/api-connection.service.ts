import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  readonly abilityApi: string;

  constructor(
    private http: HttpClient
  ) {
    this.abilityApi = "https://pokeapi.co/api/v2/ability";
  }

  getAbilityApi() {
    return this.http.get(`${this.abilityApi}`);
  }
}
