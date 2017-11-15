import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  },
  {
    path: 'burbank',
    component: BurbankComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  },
  {
    path: 'dallas',
    component: DallasComponent
  },
  {
    path: 'sanjose',
    component: SanjoseComponent
  },
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'washington',
    component: WashingtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
