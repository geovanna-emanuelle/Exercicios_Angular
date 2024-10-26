import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component'; 

@NgModule({
  declarations: [
    CalcularMediaComponent,
    MenuSuperiorComponent,
    PrincipalComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class ListaBindingModule { }