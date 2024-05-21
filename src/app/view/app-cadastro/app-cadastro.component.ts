import { Component } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-cadastro.component.html',
  styleUrl: './app-cadastro.component.css'
})
export class AppCadastroComponent {
  vPessoa: Pessoa = {
    nome: 'Marcos',
    departamento: 'DSC'
  };

  vetPessoas: Pessoa[] = [
    {
      nome: 'Rogério',
      departamento: 'DM'
    },
    {
      nome: 'Cardosoooo',
      departamento: 'DD'
    }
  ]

  vNumero : number = 0;

  mostraTamanho(pString : string) : void {
    alert("O tamanho da variável é de "+pString.length+" caracteres");
  }
}
