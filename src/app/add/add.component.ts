import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  constructor() {}

  ngOnInit(): void {}

  add(): void {
    this.result = this.number1 + this.number2;
  }
}
