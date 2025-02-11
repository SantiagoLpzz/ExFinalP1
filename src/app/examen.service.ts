import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'https://qapi.vercel.app/api/random';

  constructor(private http: HttpClient) { }

  getQuote(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getAuthor(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
