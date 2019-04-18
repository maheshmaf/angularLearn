import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"]
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get("id");
      let username = params.get("username");
      console.log(id, username);
    });
  }

  submit() {
    this.router.navigate(["/followers"], {
      queryParams: { refresh: true }
    });
  }
}
