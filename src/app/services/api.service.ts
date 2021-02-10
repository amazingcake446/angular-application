import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { FormField } from '../interfaces/form-field';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://localhost:3000/user'




  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }


  // Create a new item
  create(item): Observable<FormField> {
    return this.http
      .post<FormField>(this.BASE_URL, JSON.stringify(item), this.httpOptions)

  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<FormField>(this.BASE_URL + '/' + id, this.httpOptions)
  }
}
