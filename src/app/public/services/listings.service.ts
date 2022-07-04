import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor( private http: HttpClient ) {

  }

  getAll(): Observable<any> {
    const baseUrl = environment.baseUrl;
    return this.http.get(baseUrl)
  }

  getByID( id: number ): Observable<any> {
    const baseUrl = environment.baseUrl;
    return this.http.get(`${baseUrl}/${id}`)
  }
}
