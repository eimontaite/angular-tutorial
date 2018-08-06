import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetsComponent } from './pets/pets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetDetailsComponent }  from './pet-details/pet-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: PetDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})


export class AppRoutingModule { }
