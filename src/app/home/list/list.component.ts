import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public arr: any = [];
  public userEmail!: any|null;
  public email = "ragulmissile@gmail.com";
  evaluateMail!: boolean;

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  onSubscriber() {
    alert("Thanks for subscription");
    const val =
      (<HTMLInputElement>document.getElementById("subscribe_email_input")).value;
    this.arr.push(val);
    console.log(this.arr);
    localStorage.setItem('userNameArray', JSON.stringify(this.arr))
    const userDetails:any|null = localStorage.getItem("userData");
    if (userDetails && this.userEmail === "ragulmissile@gmail.com") {
      const s = JSON.parse(userDetails);
      this.userEmail = s.email;
      return this.evaluateMail = true;
    } else {
      return false;
    }

  }

}
