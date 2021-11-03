import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css'],
  providers: [NgbCarouselConfig],
})
export class MainComponet implements OnInit{

  showNavigationArrows = false;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    '././assets/1.jpg',
    '././assets/2.jpg',
    '././assets/3.jpg',
  ];
  SpecialCards = [
    [
      {
        'ChinaMessage': "专题报道",
        'EngMessage': "Special Report",
        "borderColor": "rgb(52, 58, 64)",
        "backColor": "rgb(255, 255, 255)",
      },
      {
        'ChinaMessage': "专题报道",
        'EngMessage': "Special Report",
        "borderColor": "rgb(52, 58, 64)",
        "backColor": "rgb(255, 255, 255)",
      },
    ],
    [
      {
        'ChinaMessage': "专题报道",
        'EngMessage': "Special Report",
        "borderColor": "rgb(52, 58, 64)",
        "backColor": "rgb(255, 255, 255)",
      },
      {
        'ChinaMessage': "专题报道",
        'EngMessage': "Special Report",
        "borderColor": "rgb(52, 58, 64)",
        "backColor": "rgb(255, 255, 255)",
      },
    ],
  ];
  MessageCards = [
    {src: '././assets/logo.png',message: ''},
    {src: '././assets/logo.png',message: ''},
    {src: '././assets/logo.png',message: ''},
  ];
  ReportCards = [
    {src: '././assets/logo.png',message: ''},
    {src: '././assets/logo.png',message: ''},
    {src: '././assets/logo.png',message: ''},
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {

  }
}

