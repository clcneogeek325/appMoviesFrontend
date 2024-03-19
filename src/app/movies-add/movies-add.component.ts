import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-add',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,FormsModule,CommonModule,FormsModule],
  templateUrl: './movies-add.component.html',
  styleUrl: './movies-add.component.css'
})
export default class MoviesAddComponent {

name = "";

public movie:any = {
  name:"",
  url:""
};

constructor(private service:MoviesService){}

addMovies(){

    this.service.addMovie(this.movie)
    .subscribe(
      response => {
        console.log('Post created successfully:', response);
        alert('Post created successfully');
      },
      error => {
        console.error('Error creating post:', error);
      }
    );

}

public funSave(){
    console.log("JSON:");
    console.log(this.movie);
    this.addMovies();
}

}
