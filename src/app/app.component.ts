import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-client';
  currentUser = new User;

  constructor(private router: Router, private userService: UserService) {}

  signout() {
    localStorage.removeItem("myTokenString");
    this.router.navigateByUrl('/post');
    window.location.reload();
  }
}
