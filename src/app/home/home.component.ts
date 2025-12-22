import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImageUrl: string = '../../assets/holidays-pics/christmas_pic.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
