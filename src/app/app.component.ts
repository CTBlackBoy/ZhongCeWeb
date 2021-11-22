import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getUsers().subscribe(console.log)
  }

  getUsers() {
    // return this.http.get("https://jsonplaceholder.typicode.com/users")
    // return this.http.get("http://127.0.0.1:5000/Report")
  }
}
