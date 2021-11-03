import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Report',
  templateUrl: './Report.component.html',
  styleUrls: ['./Report.component.css']
})
export class ReportComponent implements OnInit {

  reportMessages = [
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
