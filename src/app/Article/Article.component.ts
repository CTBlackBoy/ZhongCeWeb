import { Component, OnInit } from '@angular/core';
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {getMaxNumberOfWorkers} from "@angular/compiler-cli/ngcc/src/ngcc_options";

@Component({
  selector: 'app-article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.css']
})
export class ArticleComponent implements OnInit {

  Articles = [
    {}
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
