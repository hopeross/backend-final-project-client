import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL: string = "https://localhost:7191/api/post"
  tokenKey: string = "myTokenString";

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