import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'top-menu',
  templateUrl: './topMenu.component.html',
  styleUrls: ['./topMenu.component.css']
})
export class TopMenuComponent implements OnInit {
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];

  constructor(public route: ActivatedRoute) {};

  ngOnInit(): void {
  }

}
