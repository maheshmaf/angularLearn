import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AuthorsService } from "./authors.service";
import { CourseService } from "./course/course.service";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { AuthorsComponent } from "./authors/authors.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleCasePipe } from "./title-case.pipe";
import { LikeComponent } from "./like/like.component";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { PostsComponent } from "./posts/posts.component";
import { ArchiveComponent } from "./archive/archive.component";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    PostsComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot([
    //   { path: "", component: HomeComponent },
    //   { path: "followers", component: GithubFollowersComponent },
    //   { path: "followers/:id/:username", component: GithubProfileComponent },
    //   { path: "posts", component: PostsComponent },
    //   { path: "**", component: NotFoundComponent }
    // ])
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "archive/:year/:month", component: ArchiveComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [CourseService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
