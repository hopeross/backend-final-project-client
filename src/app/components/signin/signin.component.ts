import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  signin(){
    this.userService.signIn(this.email, this.password).subscribe((response:any) => {
        this.router.navigateByUrl('/post');
    }, error => {
        console.log('Error: ', error);
        this.router.navigateByUrl('/signin');
    });
  }
}


