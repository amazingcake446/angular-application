import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { Form } from 'src/app/interfaces/form';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: [ './form-create.component.css' ],
})

export class FormCreateComponent implements OnInit {

  data: Form;


  constructor(
    public apiService: ApiService,
    public router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.data = new Form();
  }

  ngOnInit(): void { }

  // Reset form after submitting
  clearForm() {
    (<HTMLFormElement> document.getElementById('myForm')).reset();
  }


  submitForm() {
    this.apiService.submit(this.data).subscribe((result) => {
      this.clearForm();
      // choose where to navigate after submitting
      // this.router.navigate([ 'list' ])
    });
  }

  // opens dialog(modal), not used. snackbar used instead
  openDialog() {
    // opens another component created at the bottom
    // the component is empty, the code is inside the html
    this.dialog.open(DialogContent, {
      width: '500px',
    });
  }

  // SnackBar
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar() {
    this.snackBar.open('Your message has been sent', 'Close', {
      duration: 5000,
      panelClass: [ 'green-snackbar' ],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}


// component for dialog(modal)
@Component({
  selector: 'app-dialog-content',
  templateUrl: './form-dialog-content.html',
})
export class DialogContent { }
