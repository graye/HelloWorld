import { Component } from '@angular/core';
import { User } from './user';

const USERS = [
  new User('Jack', 20, '1234', 170, 65),
  new User('Pop', 30, '1234', 160, 50),
  new User('Yom', 29, '1234', 180, 85),
  new User('Nick', 40, '1234', 175, 65),
  new User('Miggie', 45, '1234', 150, 65),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "This is the title";
  users:Array<User>;
  selectedUser:User;

  constructor(){
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  onCheckAge() {
    if(this.selectedUser.isOld()){
      window.alert('Too old');
    }
    else{
      alert('Ok');
    }
  }

  getBMI() {
    var bmi = this.selectedUser.getBMI();

    window.alert('BMI is ' + bmi);
  }
}
