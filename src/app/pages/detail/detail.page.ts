import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  selectedUser: any;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.selectedUser = this.userService.selectedUser;
    console.log(this.selectedUser);
  }

}
