import { Component } from '@angular/core';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

import { OnInit } from '@angular/core';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent {
  constructor(
    private abilityService: AbilitiesService
  ) { }

  ngOnInit() {
    this.abilityService.getAllAbilities();
  }
}
