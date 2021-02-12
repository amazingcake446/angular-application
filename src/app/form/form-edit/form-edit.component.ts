import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from 'src/app/interfaces/form';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: [ './form-edit.component.css' ]
})
export class FormEditComponent implements OnInit {

  id: number;
  data: Form


  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Form()
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params[ "id" ];

    // get message details using id
    this.apiService.getItem(this.id)
      .subscribe(response => {
        console.log(response);
        this.data = response

      })
  }

  update() {
    // update message by taking id and updated data object
    this.apiService.updateItem(this.id, this.data)
      .subscribe(response => {
        // when done, go back to list
        this.router.navigate([ 'list' ])
      })
  }

}
