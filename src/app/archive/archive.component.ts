import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-archive",
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.css"]
})
export class ArchiveComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  year;
  month;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.year = params.get("year");
      this.month = params.get("month");
    });
  }

  goHome() {
    this.router.navigate(["/"]);
  }
}
