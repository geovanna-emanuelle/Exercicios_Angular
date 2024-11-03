import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  private usuario: { email: string } | null = null;

  constructor() {}

  setUsuario(usuario: { email: string }) {
    this.usuario = usuario;
  }

  //pega as infos do usuário
  getUsuario() {
    return this.usuario;
  }
}
