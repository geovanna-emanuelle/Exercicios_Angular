import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = '';
  resultado: number | null = null;

  calcular(): void {
    if (this.operacao === 'soma') {
      this.resultado = this.numero1 + this.numero2;
    } else if (this.operacao === 'subtracao') {
      this.resultado = this.numero1 - this.numero2;
    } else if (this.operacao === 'multiplicacao') {
      this.resultado = this.numero1 * this.numero2;
    } else if (this.operacao === 'divisao') {
      this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : null;
    }
  }
}
