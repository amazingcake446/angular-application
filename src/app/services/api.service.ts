import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Form } from '../interfaces/form';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://localhost:3000/messages'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }



  // Create a new item
  submit(message): Observable<Form> {
    return this.http
      .post<Form>(this.BASE_URL, JSON.stringify(message), this.httpOptions)
  }


  // Get single Form data by ID
  getItem(id): Observable<Form> {
    return this.http
      .get<Form>(this.BASE_URL + '/' + id)
  }

  // Get Form data
  getList(): Observable<Form> {
    return this.http
      .get<Form>(this.BASE_URL)
  }

  // Update message by id
  updateItem(id, item): Observable<Form> {
    return this.http
      .put<Form>(this.BASE_URL + '/' + id, JSON.stringify(item), this.httpOptions)
  }

  // Delete message by id
  deleteItem(id) {
    return this.http
      .delete<Form>(this.BASE_URL + '/' + id, this.httpOptions)
  }
}
