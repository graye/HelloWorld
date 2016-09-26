import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "This is the title"
  user: User;

  constructor(){
    this.user = new User();
    this.user.name = "Jason";
    this.user.age=20;
    this.user.weight=60;
    this.user.height=50;
  }

  onCheckAge(){
    if(this.user.isOld()){
      window.alert('Too old');
    }
    else{
      alert('Ok');
    }
  }

  getBMI(){
    var bmi = this.user.getBMI();

    window.alert('BMI is ' + bmi);
  }
}
