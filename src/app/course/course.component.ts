import { CourseService } from "./course.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  title = "Courses List";
  courses;

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  addCourse = () => {
    this.courses.push({
      id: this.courses.length + 1,
      name: "course" + (this.courses.length + 1)
    });
  };

  removeCourse = course => {
    this.courses.splice(this.courses.indexOf(course), 1);
  };

  //prevent rerender
  trackCourse = (index, course) => {
    return course ? course.id : undefined;
  };

  ngOnInit() {}
}
