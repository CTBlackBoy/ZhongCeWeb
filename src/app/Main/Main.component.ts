import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {UserArticle} from "../user.article";
import {A} from "@angular/cdk/keycodes";
import {observable} from "rxjs";
import {Projects} from "@angular/cli/lib/config/workspace-schema";
import {UserReport} from "../user.report";
import {UserInformation} from "../user.information";
import {UserTestin} from "../user.testin";
import {UserIndex} from "../user.index";



// @ts-ignore
@Component({
  selector: 'Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css'],
  providers: [NgbCarouselConfig],
})

export class MainComponet implements OnInit{
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];


  Message = []
  Mes = {}
  Art= []
  Tes= []
  Rep= []
  Inf= []

  constructor(
    public userIndex: UserIndex
  ) {

  }
  regroup = (name: object) => {
    this.Message = []
    // @ts-ignore
    for (let i = 0; i < name.length; i++) {
      // @ts-ignore
      for (const resKey in name[i]) {
        // @ts-ignore
        // this.Art.push(res['ArticleR'][resKey])
        this.Mes[String(resKey)] = String(name[i][resKey])
      }
      // @ts-ignore
      this.Message.push(this.Mes)
      // @ts-ignore
      this.Mes = {}
    }
    return this.Message
  }

  ngOnInit():void {



    this.userIndex.getIndex().subscribe(res => {
      // @ts-ignore
      this.Art = this.regroup(res["ArticleR"])

      // @ts-ignore
      this.Rep = this.regroup(res['ReportR'])
      // @ts-ignore
      this.Inf = this.regroup(res['InformationR'])
      // @ts-ignore
      this.Tes = this.regroup(res['TestinR'])


      // @ts-ignore
      console.log(this.Art[0])
    });

  }


}

