import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MoviesService } from './../services/movies.service';

export interface PeriodicElement {
  name: string;
  id: number;
  url: string;
}

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.sass'
})
export class MoviesListComponent {
  displayedColumns: string[] = ['id', 'name', 'url'];

  movies:any;

  constructor(private service:MoviesService) {}
  ngOnInit() {

    this.service.getMovies()

      .subscribe(response => {

        this.movies = response;

      });

  }
}
