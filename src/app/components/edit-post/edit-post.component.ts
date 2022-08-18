import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id: string = "0";
  currentPost: Post = new Post();
  selected: string ='';

  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = routeID;
    this.postService.getPost(this.id).subscribe(foundPost => {
      this.currentPost = foundPost;
    });
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(() => {
      this.router.navigate(['post']);
    }, error => {
      if (error.status === 401 || error.status === 403){
        this.router.navigate(['signin']);
      }
    })
  }
}