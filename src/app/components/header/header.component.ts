import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tasck Tracker'

  constructor() { }

  ngOnInit(): void {}

  toggleAddTask() {
    alert('Toggle')
  }

}
