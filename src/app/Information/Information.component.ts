import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Information',
  templateUrl: './Information.component.html',
  styleUrls: ['./Information.component.css']
})
export class InformationComponent implements OnInit {

  informationMessages = [
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
    {imgSrc:'',message:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
