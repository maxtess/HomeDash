import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentUser: User

  constructor() {
    this.currentUser = new User()
  }

  ngOnInit() {
    this.currentUser.load()
  }

}
