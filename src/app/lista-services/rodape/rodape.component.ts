import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss',
})
export class RodapeComponent {
  usuario: { email: string } | null = null;

  constructor(private usuarioService: UsuarioServiceService) {
    this.usuario = this.usuarioService.getUsuario();
  }
}
