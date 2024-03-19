import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlMovies = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getMovies(){

    return this.httpClient.get(this.urlMovies+"/movies/all");

  }

  public addMovie(data: any){
      return this.httpClient.post(this.urlMovies+"/movies/add",data);
  }

  public removeMovie(idMovie: number){
    return this.httpClient.delete(this.urlMovies+"/movies/delete"+"?id="+idMovie);
}

  
}
