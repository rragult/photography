import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']

})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  email!:string;
  private userSub!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
      this.authService.autoLogin();
     
this.userSub = this.authService.userName.subscribe((x:any)=> this.email = x);
    
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/home"])
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
