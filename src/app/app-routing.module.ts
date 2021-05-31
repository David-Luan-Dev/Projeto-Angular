import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  { path: 'create', component: NewComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
