import { HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  newPost: Post = new Post();

  constructor(private postService: PostService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  createPost() {
    this.postService.createPost(this.newPost).subscribe(() => {
      this.router.navigate(['post']);
      window.location.reload();
    }, error => {
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }
}