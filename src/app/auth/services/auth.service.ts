import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/user.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private readonly http: HttpClient) { }

  login( credentials: UserLogin ) {
    return this.http.post(environment.baseUrl, credentials)
  }

  register() {

  }

}
