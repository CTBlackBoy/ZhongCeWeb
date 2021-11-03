import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testin',
  templateUrl: './Testin.component.html',
  styleUrls: ['./Testin.component.css'],

})
export class TestinComponent implements OnInit {
  Products = [
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  constructor() { }
  ngOnInit(): void {
    // var leftBottom = document.getElementById("leftChange")
    // var rightBottom = document.getElementById("rightChange")
    // var banner = document.getElementById("banner")
    // // @ts-ignore
    // leftBottom.addEventListener("click", function (event) {
    //   // @ts-ignore
    //   banner.style.left = (String(parseInt((banner.style.left).slice(0,-1)) - 100)+'%');
    //   // @ts-ignore
    //   banner.style.transition = '2s'
    //
    //   // @ts-ignore
    //   if(banner.style.left == "-400%") {
    //     // @ts-ignore
    //     banner.style.left = "0%"
    //   }
    // },false)
    // // @ts-ignore
    // rightBottom.addEventListener("click", function (event) {
    //   // @ts-ignore
    //   banner.style.left = (String(parseInt((banner.style.left).slice(0,-1)) + 100)+'%');
    //   // @ts-ignore
    //   banner.style.transition = '2s'
    //
    //   // @ts-ignore
    //   if(banner.style.left == "100%") {
    //     // @ts-ignore
    //     banner.style.left = "-300%"
    //   }
    // },false)

  }

}
