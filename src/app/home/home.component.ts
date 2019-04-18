import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title: string = "Home Page";
  archives = [
    { year: 2019, month: 3 },
    { year: 2019, month: 4 },
    { year: 2019, month: 5 }
  ];

  constructor() {}

  ngOnInit() {}
}
