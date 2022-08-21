import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  postList: Post[] = [];
  currentUser: User = new User;
  
  constructor(private postService: PostService, private router: Router, private userService: UserService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      //TODO: Reverse Order List so listed newest first
      this.postList = post;
    })

    //TODO: Make it so we only hit this endpoint when signed in
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    })
  }

  onDelete(id: any): void {
    this.postService.deletePost(id).subscribe(() => {
      this.router.navigateByUrl("/post");
      window.location.reload();
    }, error => {
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    })
  }
}