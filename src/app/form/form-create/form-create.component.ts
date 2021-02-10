import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormField } from 'src/app/interfaces/form-field';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: [ './form-create.component.css' ]
})
export class FormCreateComponent implements OnInit {

  data: FormField
  currentForm = null;


  constructor(
    public api: ApiService,
    public router: Router
  ) {
    this.data = new FormField()
  }

  ngOnInit(): void {
  }





  clearForm() {
    (<HTMLFormElement> document.getElementById("myForm")).reset();
  }

  submitForm() {
    this.api.create(this.data)
      .subscribe((result) => {
        this.clearForm()

      })
  }
}
