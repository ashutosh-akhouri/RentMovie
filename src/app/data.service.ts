import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.serverUrl+'/api/movies');
  }
}
