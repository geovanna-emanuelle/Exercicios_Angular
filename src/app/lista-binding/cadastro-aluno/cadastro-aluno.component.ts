import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';

  enviarFormulario(): void {
    if (this.ra && this.nome && this.email && this.celular) {
      // Aqui você pode processar os dados do formulário
      console.log('Dados do Formulário:', { ra: this.ra, nome: this.nome, email: this.email, celular: this.celular });
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
