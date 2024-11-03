import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  varGlobal: string = 'valor global';
  link: string = 'http://localhost:3000/clientes';

  constructor() { }

  getClientes() {
    return fetch(this.link).then(res => res.json())
  }
   //http://localhost:3000/clientes

  getCliente(id: string) {
    return fetch(`${this.link}/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Cliente não encontrado');
        }
        return res.json();
      })
      .catch(err => console.error('Erro ao buscar cliente:', err));
  }
  //http://localhost:3000/clientes/1

  setCliente(cliente: any) {
    return fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then(res => res.json())
      .catch(err => console.error('Erro ao adicionar cliente:', err));
  }
  // http://localhost:3000/clientes

//   {
//     "nome": "",
//     "email": "",
//     "telefone": "",
//     "endereco": ""
// }

  atualizaCliente(cliente: any) {
    return fetch(`${this.link}/${cliente.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao atualizar cliente');
        }
        return res.json();
      })
      .catch(err => console.error('Erro ao atualizar cliente:', err));
  }
  //http://localhost:3000/clientes

  excluiCliente(id: string) {
    return fetch(`${this.link}/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao excluir cliente');
        }
        return res.json();
      })
      .catch(err => console.error('Erro ao excluir cliente:', err));
  }
  // http://localhost:3000/clientes/1
}
