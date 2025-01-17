import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(limit: number, skip: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }
}
