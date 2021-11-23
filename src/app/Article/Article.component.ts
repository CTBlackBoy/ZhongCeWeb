import { Component, OnInit } from '@angular/core';
import {UserArticle} from "../user.article";

@Component({
  selector: 'app-article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.css']
})
export class ArticleComponent implements OnInit {
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];


  Art = {
  };
  MesArt = []

  constructor(
    public userArticle: UserArticle,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.userArticle.getArticle().subscribe(res => {
      console.log(res)
      // @ts-ignore
      for (let i = 0; i < res['ArticleR'].length; i++) {
        // @ts-ignore
        for (const resKey in res['ArticleR'][i]) {
          // @ts-ignore
          // this.Art.push(res['ArticleR'][resKey])
          this.Art[String(resKey)] = String(res['ArticleR'][i][resKey])
        }
        // @ts-ignore
        this.MesArt.push(this.Art)
        // @ts-ignore
        this.Art = {}
      }


      // console.log(this.MesArt)
    });
  }

}
