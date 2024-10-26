import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.scss'
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  calcularApolice() {
    let percentual = 0;

    if (this.sexo === 'masculino') {
      percentual = this.idade && this.idade <= 25 ? 0.15 : 0.10;
    } else if (this.sexo === 'feminino') {
      percentual = 0.08;
    }

    if (this.valorAutomovel) {
      this.valorApolice = this.valorAutomovel * percentual;
    }
  }
}
