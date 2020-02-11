import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(res => {
      this.movies = res;
    })
  }

}
