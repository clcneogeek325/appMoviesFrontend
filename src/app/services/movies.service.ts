import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = 'http://localhost:8080/movies/all';

  constructor(private httpClient: HttpClient) { }

  getMovies(){

    return this.httpClient.get(this.url);

  }
}
