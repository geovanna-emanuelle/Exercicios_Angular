import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Lista01/principal/principal.component';
import { LoginComponent } from './Lista01/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
