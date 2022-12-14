import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  id: string = "0";
  currentUser: User = new User();
  selected: string ='';

  constructor(private userService: UserService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = routeID;
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.router.navigateByUrl("/profilepage/" + this.currentUser.userId);
    })
  }
}