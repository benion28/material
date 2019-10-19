import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

// Angular Material
import {
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
  MatDatepickerModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatPaginatorModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { OrderNewComponent } from './order-new/order-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatMomentDateModule,
    MatSortModule
  ]
})
export class OrdersModule { }
