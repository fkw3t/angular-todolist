import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(){
  }
  
  ngOnInit(): void { 
  }
  
  item: String;

  @Output() onAdd = new EventEmitter<any>();

  addItem(){
    this.onAdd.emit({value: this.item});
    this.clearInput();
  }
  
  clearInput(){
    this.item = null;
  }
  
}
