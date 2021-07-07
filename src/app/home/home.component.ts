import { OnDestroy } from '@angular/core';
import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TableModel } from './components/table/model/table.model';
import { TableComponent } from './components/table/table.component';
import { take } from 'rxjs/operators';

@Component({
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('tableContainer', { read: ViewContainerRef })
  tableContainer!: ViewContainerRef;

  private _subscription$ = new Subscription();
  private _dataSource: TableModel[] = [
    {
      id: 1,
      name: 'João',
      adress: 'Rua A',
      phoneNumber: '99999-9999',
    },
    {
      id: 2,
      name: 'João 2',
      adress: 'Rua B',
      phoneNumber: '99999-9999',
    },
  ];

  get tableComponentAlreadyLoaded(): boolean {
    return !!this.tableContainer?.length;
  }

  constructor(
    private _cfr: ComponentFactoryResolver,
    private _injector: Injector
  ) {}

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

  ngOnInit() {}

  async loadTableComponent() {
    if (this.tableComponentAlreadyLoaded) return;

    const { TableComponent } = await import(
      './components/table/table.component'
    );

    const tableFactory = this._cfr.resolveComponentFactory(TableComponent);

    const { instance } = this.tableContainer.createComponent(
      tableFactory,
      undefined,
      this._injector
    );

    instance.dataSource = this._dataSource;

    this._configureRemoveEvent(instance);
  }

  private _configureRemoveEvent(instance: TableComponent) {
    const removeEventSubscription = instance.removeEvent.subscribe(
      (event: any) => {
        this._dataSource = this._dataSource.filter((data) => data.id !== event);
        instance.dataSource = this._dataSource;
      },
      () => {},
      () => {
        console.log('completou');
      }
    );

    this._subscription$.add(removeEventSubscription);
  }

  clearTableComponent() {
    this.tableContainer.clear();
  }
}
