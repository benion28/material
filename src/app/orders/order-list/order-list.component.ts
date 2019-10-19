import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';


const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 105,
    total: 39.99,
    description: '5lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 107,
    total: 29.99,
    description: '1lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 105,
    total: 39.99,
    description: '5lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 107,
    total: 29.99,
    description: '1lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 105,
    total: 39.99,
    description: '5lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 107,
    total: 29.99,
    description: '1lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 105,
    total: 39.99,
    description: '5lbs pounds of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 107,
    total: 29.99,
    description: '1lbs pounds of tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];

  dataSource: MatTableDataSource<object>;

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 8, 10];

  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;

  constructor() { }

  onPageChange(event) {
    const previousPageIndex = event.previousPageIndex;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    const length = event.length;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex, pageSize) {
    this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }

  ngOnInit() {
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for (const element of ELEMENT_DATA) {
      element.isChecked = !element.isChecked;
    }

  }

}
