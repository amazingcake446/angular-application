

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IntroductionComponent } from './containers/introduction/introduction.component';
import { QuestionComponent } from './containers/question/question.component';
import { ResultsComponent } from './containers/results/results.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { FormEditComponent } from './form/form-edit/form-edit.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { FormCreateComponent } from './form/form-create/form-create.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
 /*  { path: 'quiz', component: QuizComponent }, */
  { path: 'contact', component: FormCreateComponent },
  { path: 'edit/:id', component: FormEditComponent },
  { path: 'list', component: FormListComponent },
  { path: 'intro', component: IntroductionComponent, pathMatch: 'full' },
  { path: 'question', component: QuestionComponent, pathMatch: 'full' },
  { path: 'question/:questionId', component: QuestionComponent, pathMatch: 'full' },
  { path: 'results', component: ResultsComponent, pathMatch: 'full' },
  /* { path: '', redirectTo: 'intro', pathMatch: 'full' } */

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
