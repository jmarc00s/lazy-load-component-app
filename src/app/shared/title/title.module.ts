import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { TitleService } from './title.service';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule],
  exports: [TitleComponent],
  providers: [TitleService],
})
export class TitleModule {}
