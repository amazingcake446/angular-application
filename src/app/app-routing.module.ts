import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormEditComponent } from './form/form-edit/form-edit.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'home', component: NavigationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'edit/:id', component: FormEditComponent },
  { path: 'list', component: FormListComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
