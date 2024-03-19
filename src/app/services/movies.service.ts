import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlAllMovies = 'http://localhost:8080/movies/all';

  private urlAddMovies = 'http://localhost:8080/movies/add';

  constructor(private httpClient: HttpClient) { }

  getMovies(){

    return this.httpClient.get(this.urlAllMovies);

  }

  addMovies(data: any){
      return this.httpClient.post(this.urlAddMovies,data);
  }
}
