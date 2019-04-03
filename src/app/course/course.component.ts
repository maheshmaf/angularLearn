import { CourseService } from "./course.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  title = "Courses List";
  course = "Node";
  courses;

  printCourse() {
    console.log(this.course);
  }

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {}
}
