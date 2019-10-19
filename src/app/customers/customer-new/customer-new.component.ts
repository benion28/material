import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialog, MatSnackBar, ErrorStateMatcher } from '@angular/material';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  emailFormControl: FormControl;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  openUndoSnackBar() {
    const snackbarRef = this.snackbar.open('Customer Saved', 'UNDO', {
      horizontalPosition: 'end'
    });

    snackbarRef.onAction().subscribe( () => {
      alert('Undo That Save');
    });
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('User Choose' + ' ' + result);
    });
  }

}
