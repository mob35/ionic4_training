import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any = [];
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.loadUser();
  }

  async loadUser() {
    let result = await this.userService.getUsers();
    console.log(result)
    this.users = result.results;

  }
  openDetail(item) {
    this.userService.selectedUser = item;
    this.navCtrl.navigateForward('/detail');
  }

}
