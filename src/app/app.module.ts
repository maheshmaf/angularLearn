import { AuthorsService } from "./authors.service";
import { CourseService } from "./course/course.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { AuthorsComponent } from "./authors/authors.component";
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, AuthorsComponent, FavoriteComponent, TitleCasePipe, LikeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CourseService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
