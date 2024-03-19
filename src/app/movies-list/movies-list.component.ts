import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MoviesService } from './../services/movies.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  id: number;
  url: string;
}

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,MatIconModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.sass'
})
export default class MoviesListComponent {
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
