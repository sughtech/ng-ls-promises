import { Component, OnInit, Input } from '@angular/core';
import { CardItem } from '../card-item';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  // template: 'p',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input('cardItem') obj: CardItem;

  constructor() { }

  ngOnInit(): void {
  }
}
