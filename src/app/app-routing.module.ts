import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesListComponent } from './public/components/properties-list/properties-list.component';
import { PropertyComponent } from './public/components/property/property.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesListComponent
  },
  {
    path: ':id',
    component: PropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
