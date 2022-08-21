import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: "", redirectTo: "post", pathMatch: "full"},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'post', component: PostsComponent},
  {path: 'profilepage/:id', component: ProfilePageComponent},
  {path: 'newpost', component: NewPostComponent},
  {path: 'edit/:id', component: EditPostComponent},
  {path: 'editUser/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }