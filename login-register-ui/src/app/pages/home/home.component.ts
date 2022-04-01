import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  getUsersLogged() {
    this.userService.getUsers().subscribe((data: any) => console.log(data));
  }

}
