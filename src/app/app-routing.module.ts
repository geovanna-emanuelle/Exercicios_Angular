// lista01:

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { PrincipalComponent } from './Lista01/principal/principal.component';
// import { LoginComponent } from './Lista01/login/login.component';

// const routes: Routes = [
//   {path: '', component: LoginComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'principal', component: PrincipalComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// ----------------------------------------------------------------------

// lista binding

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './lista-binding/principal/principal.component';
import { CalcularMediaComponent } from './lista-binding/calcular-media/calcular-media.component';
import { CalculadoraComponent } from './lista-binding/calculadora/calculadora.component';
import { CadastroAlunoComponent } from './lista-binding/cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './lista-binding/apolice-seguro/apolice-seguro.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'calcularMedia', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'cadastroAluno', component: CadastroAlunoComponent },
  { path: 'apoliceSeguro', component: ApoliceSeguroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
