import { Component, OnInit } from '@angular/core';
import {UserTestin} from "../user.testin";

@Component({
  selector: 'app-testin',
  templateUrl: './Testin.component.html',
  styleUrls: ['./Testin.component.css'],

})
export class TestinComponent implements OnInit {
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];


  Tes = {
  }
  MesTes = []
  constructor(
    public userTestin: UserTestin
  ) {

  }
  ngOnInit(): void {
    this.userTestin.getTestin().subscribe(res => {
      // @ts-ignore
      // for (let i = 0; i < res['ArticleR'].length; i++) {
      //
      //   // @ts-ignore
      //   for (const resKey in res['ArticleR'][i]) {
      //     // @ts-ignore
      //     // this.Art.push(res['ArticleR'][resKey])
      //     this.Mes[String(resKey)] = String(res['ArticleR'][i][resKey])
      //   }
      //   // @ts-ignore
      //   this.Art.push(this.Mes)
      //   // @ts-ignore
      //   this.Art = {}
      // }


      console.log(this.MesTes)
    });
  }

}
