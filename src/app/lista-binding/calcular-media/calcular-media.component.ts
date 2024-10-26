import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.scss',
})
export class CalcularMediaComponent {
  ac1: number | null = null;
  ac2: number | null = null;
  ag: number | null = null;
  af: number | null = null;
  media: number | null = null;
  status: string = '';

  calcularMedia(): void {
    if (
      this.ac1 !== null &&
      this.ac2 !== null &&
      this.ag !== null &&
      this.af !== null
    ) {
      this.media =
        this.ac1 * 0.15 + this.ac2 * 0.3 + this.ag * 0.1 + this.af * 0.45;
      this.status = this.media >= 5 ? 'Aprovado' : 'Reprovado';
    } else {
      this.status = 'Por favor, preencha todas as notas.';
      this.media = null;
    }
  }
}
