import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: '', redirectTo:"/users", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }