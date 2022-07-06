import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
