import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../../lista-services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';  // Propriedade para armazenar o email
  senha: string = ''; 

  constructor(
    private router: Router,
    private usuarioService: UsuarioServiceService
  ) {}

  onLogin() {
    const usuarioLogado = { email: this.email}; // Pega o email do input
    this.usuarioService.setUsuario(usuarioLogado);
    this.router.navigate(['/principal']); 
  }
}
