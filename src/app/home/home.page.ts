import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUsers();

  }
  openDetail() {
    this.navCtrl.navigateForward('/detail');
  }

}
