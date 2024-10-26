import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PrincipalComponent } from './lista-binding/principal/principal.component';
import { MenuSuperiorComponent } from './lista-binding/menu-superior/menu-superior.component';
import { CalcularMediaComponent } from './lista-binding/calcular-media/calcular-media.component';
import { CalculadoraComponent } from './lista-binding/calculadora/calculadora.component';
import { CadastroAlunoComponent } from './lista-binding/cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './lista-binding/apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuSuperiorComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
