import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  postList: Post[] = [];
  
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.postList = post;
    })
  }
}


//   onDelete(id: any): void {
//     this.coffeeService.deleteCoffee(id).subscribe(() => {
//       window.alert("Deleted Coffee Successfully");
//       this.router.navigateByUrl("/coffee");
//       window.location.reload();
//     }, error => {
//       console.log('Error: ', error);
//       if (error.status === 401 || error.status === 403) {
//         this.router.navigate(['signin']);
//       }
//     }
//   )};
// }