import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';
  expToken: any;
  tokenPayload: any;
  expirationDate: any;

  constructor(private userService: UserService, private router: Router, private jwtHelper: JwtHelperService) {

   }

  ngOnInit(): void {
  }

  signin(){
    this.userService.signIn(this.email, this.password).subscribe((response:any) => {
        // this.expToken = localStorage.getItem("myTokenString");
        // this.GetTokenDecoded()
        this.router.navigateByUrl('/post');
    }, error => {
        console.log('Error: ', error);
        this.router.navigateByUrl('/signin');
    });
  }

  GetTokenDecoded() {
    // my brain fried and I couldn't take this any further
    // this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(this.expToken));
    // console.log(this.tokenPayload);
  }
}
