import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;

  toggleBg() {
    this.isFavorite = !this.isFavorite;
  }
  constructor() {}

  ngOnInit() {}
}
