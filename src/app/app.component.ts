import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do application';

  // filter criteria.. By default setting it to 'all'.
  filter:
    'all' | 'active' | 'done' = 'all';

  allItems:Item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items():Item[] {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done)
  }

  addItem(description: string): void {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item):void{
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
