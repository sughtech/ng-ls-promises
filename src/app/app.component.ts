import { Component, OnInit } from '@angular/core';
import { PullDataService } from './pull-data.service';
import { CardItem } from './card-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Contact Card List';
  obj: CardItem[];
  err: string = "";

  constructor(private pullDataService: PullDataService) {}

  typeChecker(obj) {
    return Object.prototype.toString
      .apply(obj)
      .replace(/\[object (.+)\]/i, '$1')
      .toLowerCase();
  }

  onClear(): void{
    localStorage.clear();
    this.obj = null;
    this.err = 'No posts to display';
  }

  onFetch(): void{
    this.pullDataService.start().then((value) => {
      if (this.typeChecker(value) === 'string') {
        this.err = value;
      } else {
        this.obj = value;
      }
    });
  }

  ngOnInit(): void {
    this.onFetch();
  }
}
