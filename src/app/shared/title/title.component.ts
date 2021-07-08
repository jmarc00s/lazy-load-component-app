import { Component, Input } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-title',
  template: `<h2 (click)="titleToUpper()">{{ title }}</h2>`,
})
export class TitleComponent {
  @Input() title = '';

  constructor(private _titleService: TitleService) {}

  titleToUpper(): void {
    this.title = this._titleService.setTitleUpperCase(this.title);
  }
}
