import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilityComponent } from './components/ability/ability.component';

const routes: Routes = [
  { path: "ability", component: AbilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
