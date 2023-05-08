import { Component } from '@angular/core';

type item = { description: string; done: boolean };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do application';

  // filter criteria.. By default setting it to all.
  filter:
    'all' | 'active' | 'done' = 'all';

  allItems: item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items(): item[] {
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
}
