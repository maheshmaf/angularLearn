import { AuthorsService } from "./../authors.service";
import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-authors",
  // templateUrl: './authors.component.html',
  template: `
    <h2>{{ authors.length + " Authors" }}</h2>
    <ul>
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
  `,
  styleUrls: ["./authors.component.css"]
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getauthors();
  }

  ngOnInit() {}
}
