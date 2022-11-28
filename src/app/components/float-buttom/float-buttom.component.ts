import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-buttom',
  templateUrl: './float-buttom.component.html',
  styleUrls: ['./float-buttom.component.scss']
})
export class FloatButtomComponent implements OnInit {
  toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

}
