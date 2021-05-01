import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  timestamp: string;
  value: number;

  constructor() {
    this.timestamp = new Date().toLocaleTimeString();
  }

  diceRoll() {
    this.value = Math.ceil(Math.random() * 20);
  }

}
