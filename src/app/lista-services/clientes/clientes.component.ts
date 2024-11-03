import { Component } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})
export class ClientesComponent {
  clientes: any = [];
  texto: string = '';
  novoCliente: any = { nome: '', email: '', telefone: '', endereco: '' };
  clienteAtualizar: any = null;

  constructor(private serv: ClienteServiceService) {
    this.loadClientes();
    
  }

  loadClientes() {
    this.serv.getClientes().then(data => {
      this.clientes = data;
    });
  }

  // Buscar um cliente por ID
  pesquisar() {
    const id = this.texto;
    this.serv.getCliente(id).then(data => {
      if (data && !data.error) {
        this.clientes = [data]; // Exibe apenas o cliente encontrado
      } else {
        this.clientes = []; // Limpa a lista se o cliente não for encontrado
      }
    })
    .catch(error => {
      this.clientes = []; // Limpa a lista em caso de erro
    });
  }

  // adicionar novo cliente
  adicionarCliente() {
    this.serv.setCliente(this.novoCliente).then(() => {
      this.loadClientes(); 
      this.novoCliente = { nome: '', email: '', telefone: '', endereco: '' }; // Limpa
    });
  }

  // Selecionar cliente para atualização
  selecionarCliente(cliente: any) {
    this.clienteAtualizar = { ...cliente }; //joga no form
  }

  // atualizar um cliente
  atualizarCliente() {
    this.serv.atualizaCliente(this.clienteAtualizar).then(() => {
      this.loadClientes(); 
      this.clienteAtualizar = null; // limpa
    });
  }

  // Excluir um cliente
  excluir(cliente: any) {
    this.serv.excluiCliente(cliente.id).then(() => {
      this.loadClientes(); 
    });
  }

  
}
