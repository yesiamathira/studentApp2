import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'',
    redirectTo:'/student',
    pathMatch:'full'
  },
  {path: 'edit/:rn', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
