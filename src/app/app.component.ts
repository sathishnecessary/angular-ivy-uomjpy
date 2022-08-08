import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  countDefaultValue = 1;
  parentCount: number = this.countDefaultValue;
  oddNums: number[] = [];
  evenNums: number[] = [];

  clearCount() {
    this.parentCount = this.countDefaultValue;
  }

  OnincreamentOnEachInterval(emittedNumber: number) {
    if (emittedNumber % 2 == 0) this.evenNums.push(emittedNumber);
    else this.oddNums.push(emittedNumber);
  }
}
