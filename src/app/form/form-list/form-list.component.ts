import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: [ './form-list.component.css' ]
})
export class FormListComponent implements OnInit {

  formData: any;

  constructor(public apiService: ApiService) {
    this.formData = []
  }

  ngOnInit(): void {
    this.getFullList()
  }

  getFullList() {
    // Get saved list of messages
    this.apiService.getList()
      .subscribe(response => {
        console.log(response);
        this.formData = response

      })
  }

  delete(message) {
    // Delete message in Form data
    this.apiService.deleteItem(message.id)
      .subscribe(response => {
        // Update list after delete is successful
        this.getFullList()
      })
  }
}
