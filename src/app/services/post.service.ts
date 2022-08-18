import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL: string = "https://localhost:7191/api/post"
  tokenKey: string = "thisPostToken";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURL);
  }

  createPost(newPost: Post){
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(this.baseURL, newPost, {headers: reqHeaders});
  }

  getPost(postId: string) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Post>(this.baseURL + "/" + postId, {headers: reqHeaders});
  }

  updatePost(updatedPost: Post) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(this.baseURL + "/" + updatedPost.postId, updatedPost, { headers: reqHeaders})
  }

  deletePost(postId: string) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(this.baseURL + "/" + postId, { headers: reqHeaders});
  }
}





//   getCoffee(coffeeId: string) {
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.get<Coffee>(this.baseURL + "/" + coffeeId, {headers: reqHeaders});
//   }



//   updateCoffee(updatedCoffee: Coffee) {
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.put(this.baseURL + "/" + updatedCoffee.coffeeId, updatedCoffee, { headers: reqHeaders})
//   }

//   deleteCoffee(coffeeId: string) {
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.delete<any>(this.baseURL + "/" + coffeeId, { headers: reqHeaders});
//   }
// }