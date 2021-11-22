import { Component, OnInit } from '@angular/core';
import {UserReport} from "../user.report";

@Component({
  selector: 'Report',
  templateUrl: './Report.component.html',
  styleUrls: ['./Report.component.css']
})
export class ReportComponent implements OnInit {
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];


  Rep = {}
  MesRep = []

  constructor(
    public userRepoet: UserReport,
  ) {

  }

  ngOnInit(): void {
    this.userRepoet.getReport().subscribe(res => {
      // @ts-ignore
      for (let i = 0; i < res['ReportR'].length; i++) {
        // @ts-ignore
        for (const resKey in res['ReportR'][i]) {
          // @ts-ignore
          // this.Art.push(res['ArticleR'][resKey])
          this.Rep[String(resKey)] = String(res['ReportR'][i][resKey])
        }
        // @ts-ignore
        this.MesRep.push(this.Rep)
        // @ts-ignore
        this.Rep = {}
      }


      console.log(this.MesRep)
    });
  }

}
