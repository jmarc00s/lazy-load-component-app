import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  setTitleUpperCase(title: string) {
    return title.toUpperCase();
  }
}
