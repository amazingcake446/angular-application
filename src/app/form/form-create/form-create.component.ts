import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormField } from 'src/app/interfaces/form-field';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: [ './form-create.component.css' ],
})
export class FormCreateComponent implements OnInit {
  data: FormField;
  currentForm = null;

  constructor(
    public api: ApiService,
    public router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.data = new FormField();
  }

  ngOnInit(): void { }

  clearForm() {
    (<HTMLFormElement> document.getElementById('myForm')).reset();
  }

  submitForm() {
    this.api.create(this.data).subscribe((result) => {
      this.clearForm();
    });
  }

  openDialog() {
    this.dialog.open(DialogContent, {
      width: '500px',
    });
  }

  // SnackBar
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar() {
    this.snackBar.open('Your message has been sent', 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: './form-dialog-content.html',
})


export class DialogContent { }
