

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

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  /*  { path: 'quiz', component: QuizComponent }, */
  { path: 'contact', component: FormCreateComponent },
  { path: 'edit/:id', component: FormEditComponent },
  { path: 'list', component: FormListComponent },
  { path: 'intro', component: IntroductionComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:questionId', component: QuestionComponent },
  { path: 'results', component: ResultsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
