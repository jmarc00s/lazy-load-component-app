import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import {
  Component,
  Input,
  NgModule,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { TableModel } from './model/table.model';
import { TitleModule } from 'src/app/shared/title/title.module';

@Component({
  selector: 'app-table',
  templateUrl: './view/table.component.html',
})
export class TableComponent {
  @Input() dataSource: TableModel[] = [];

  @Output() removeEvent = new EventEmitter<number>();

  constructor() {}
}
@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TitleModule],
})
export class TableModule {}
