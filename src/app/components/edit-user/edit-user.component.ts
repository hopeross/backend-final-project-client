import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: string = "0";
  currentUser: User = new User();
  selected: string = '';

  constructor(private userService: UserService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser.userId)
    });
  }

  updateUser() {
    this.userService.updateUser(this.currentUser).subscribe(() => {
      this.router.navigate(['post']);
    }, error => {
      if (error.status === 401 || error.status === 403){
        this.router.navigate(['signin']);
      }
    })
  }
}