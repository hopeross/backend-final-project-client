import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  newPost: Post = new Post();

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  createPost() {
    var todaysDate = new Date();
    //this.newPost.createdOn = todaysDate.toString;
    //this.newPost.ownerId = localStorage.getItem

    this.postService.createPost(this.newPost).subscribe(() => {
      this.router.navigate(['post']);
    }, error => {
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }
}