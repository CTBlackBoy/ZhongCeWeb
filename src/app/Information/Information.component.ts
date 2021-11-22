import { Component, OnInit } from '@angular/core';
import {UserInformation} from "../user.information";

@Component({
  selector: 'Information',
  templateUrl: './Information.component.html',
  styleUrls: ['./Information.component.css']
})
export class InformationComponent implements OnInit {
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];


  Inf = {

  }
  MesInf = []

  constructor(
    public userInformation: UserInformation,
  ) {

  }

  ngOnInit(): void {
    this.userInformation.getInformation().subscribe(res => {
      // @ts-ignore
      for (let i = 0; i < res['InformationR'].length; i++) {
        // @ts-ignore
        for (const resKey in res['InformationR'][i]) {
          // @ts-ignore
          // this.Art.push(res['ArticleR'][resKey])
          this.Inf[String(resKey)] = String(res['InformationR'][i][resKey])
        }
        // @ts-ignore
        this.MesInf.push(this.Inf)
        // @ts-ignore
        this.Inf = {}
      }


      console.log(this.MesInf)
    });
  }

}
