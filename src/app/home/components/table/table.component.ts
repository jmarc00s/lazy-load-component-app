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

@Component({
  selector: 'app-table',
  templateUrl: './view/table.component.html',
})
export class TableComponent implements OnInit {
  @Input() dataSource: TableModel[] = [];

  @Output() removeEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
})
class TableModule {}
