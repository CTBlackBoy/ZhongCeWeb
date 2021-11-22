import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relation',
  templateUrl: './Relation.component.html',
  styleUrls: ['./Relation.component.css']
})
export class RelationComponent implements OnInit {
  links = [
    { title: '首页', fragment: 'index', routerlink: '/Main'  },
    { title: '专题报道', fragment: 'report', routerlink: '/Report'},
    { title: '行业资讯', fragment: 'Information', routerlink: '/Information'},
    { title: '产品评测', fragment: 'Article',  routerlink: '/Article'},
    { title: '众测申请', fragment: 'testin',  routerlink: '/Testin'},
    { title: '联系方式', fragment: 'relation',  routerlink: '/Relation'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
