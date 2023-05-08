// The addition of Input, Output, and EventEmitter allows ItemComponent to share data with AppComponent.
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;

  @Input() item!: Item; // this will allow data to come into the component.
  @Output() remove = new EventEmitter<Item>(); // this will allow data to go out of the component.

  saveItem(description: string){
    if(description){
      this.editable = false;
      this.item.description = description;
    }
  }
}
