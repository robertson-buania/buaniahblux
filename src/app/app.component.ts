import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hblux';

  ngOnInit(): void {
    const ref = document.querySelectorAll(".ytp-impression-link")

  }
}
