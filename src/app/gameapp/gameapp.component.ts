import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gameapp',
  templateUrl: './gameapp.component.html',
  styleUrls: ['./gameapp.component.css'],
})
export class GameappComponent implements OnInit {
  @Output() incrementOnInterval = new EventEmitter<number>();
  interval;
  incrementNumber = 0;
  constructor() {}

  ngOnInit() {}

  startGame() {
    this.interval = setInterval(() => {
      this.incrementOnInterval.emit(this.incrementNumber + 1);
      this.incrementNumber++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
