import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  user: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.selectedUser = this.userService.selectedUser;
    // console.log(this.selectedUser);

    let email = this.route.snapshot.paramMap.get('email');
    let selectedUser = this.userService.searchUserFromEmail(email);
    console.log(selectedUser);
    this.user = selectedUser;
  }

}
