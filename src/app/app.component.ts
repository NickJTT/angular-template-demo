import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{title}}</p>
    <img [src]='imgURL' alt='Picture'>
    <div>
      <button (click)='increment()'>Clicked {{count}} times</button>
    </div>
    <div>
      <input type='text' [(ngModel)]='name'>
      <p>Current text value: {{name}}</p>
    </div>
    <div>
      <input type='text' [ngModel]='username' (ngModelChange)='greetNick($event)'>
      <p>Welcome, {{username}}!</p>
    </div>
    <div>
      <input type='text' [(ngModel)]='customerName'>
      <p>Customer name: {{customerName}}</p>
    </div>
    <div>
      <input #textRef type='text' [(ngModel)]='text'>
      <p>Some text: {{text}}</p>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  public title = 'Hello, World!';
  public imgURL = 'https://picsum.photos/200';
  public count = 0;
  public name: string = '';
  public username: string = '';
  public text: string = '';
  @ViewChild('textRef') textElementRef: ElementRef = new ElementRef(Input);
  private _customerName: string = '';

  public get customerName(): string {
    return this._customerName;
  }

  public set customerName(value: string) {
    this._customerName = value;
    if (value === 'Nick') {
      alert('Welcome back, Nick!');
    }
  }

  ngAfterViewInit() {
    this.textElementRef.nativeElement.focus();
  }

  public increment() {
    ++this.count;
  }

  public greetNick(value: string) {
    this.username = value;
    if (value === 'Nick') {
      alert('Welcome back, Nick!');
    }
  }
}
