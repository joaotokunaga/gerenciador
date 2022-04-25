import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'underline',
    animation: 'blinker 1s step-start infinite'
  }
  title = 'gerenciador'
  twoWay: string

  constructor() {
    this.twoWay = 'troque esse texto pls'
  }
}
