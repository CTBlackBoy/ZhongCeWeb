import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.css']
})
export class ArticleComponent implements OnInit {

  hotArticles = [
    {},
    {},
    {}
  ]
  goodArticles = [
    {},
    {},
    {}
  ]
  Articles = [
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
