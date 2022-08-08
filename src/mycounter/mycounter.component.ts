import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css']
})
export class MycounterComponent implements OnInit {

  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
 
  increment() {
   this.count++;
   this.countChange.emit(this.count);
 }
  constructor() { }

  ngOnInit() {

  }


}