import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: Date

  constructor() {
    this.data = new Date()
  }

  ngOnInit(): void {
  }

  formatarData(): string {
    return this.data.getDate() + '/' + (this.data.getMonth() + 1 < 10 ? '0' + (this.data.getMonth() + 1) : (this.data.getMonth() + 1)) + '/' + this.data.getFullYear() + ' ' + this.data.getHours() + ':' + this.data.getMinutes()
  }

}
