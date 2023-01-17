import { Component } from '@angular/core';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent {
  abilityListApi: any;

  constructor(
    private connService: ApiConnectionService) {
    this.abilityListApi;
    this.getAllAbility()
  }

  getAllAbility() {
    this.connService.getAbilityApi()
    .subscribe((ability) => {
      this.abilityListApi = ability;
      console.log(this.abilityListApi);
    });

  }
}
