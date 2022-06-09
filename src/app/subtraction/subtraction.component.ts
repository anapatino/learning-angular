import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss'],
})
export class SubtractionComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  constructor() {}

  ngOnInit(): void {}

  subtraction(): void {
    this.result = this.number1 - this.number2;
  }
}
