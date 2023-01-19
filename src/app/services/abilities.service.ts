import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';

import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  allAbilitiesListApi: any;

  constructor(
    private connService: ApiConnectionService,
  ) {

  }

  ngOnInit() {
    this.getAllAbilities();
  }

  getAllAbilities() {
    this.connService.getAllAbilities()
      .subscribe((abilities: any) => {
        this.allAbilitiesListApi = abilities.results;
        console.log(this.allAbilitiesListApi);
      })
  }
}
