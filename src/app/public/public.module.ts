import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PublicRoutingModule } from './public-routing.module';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';


@NgModule({
  declarations: [
    PropertiesListComponent,
    PropertyComponent,
    PropertyCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
