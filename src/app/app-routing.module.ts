import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateComponent } from './form/form-create/form-create.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'create' },
  // { path: 'create', component: FormCreateComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
