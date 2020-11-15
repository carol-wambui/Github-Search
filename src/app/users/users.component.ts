import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  getReopos(searchName: any) {
    throw new Error("Method not implemented.");
  }
  allRepos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
