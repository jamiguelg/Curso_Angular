import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public autor: string;
  public anno: number;

  constructor() { }

  ngOnInit() {
    this.autor = "Jesús de Miguel";
    this.anno = 2017;
  }

}
