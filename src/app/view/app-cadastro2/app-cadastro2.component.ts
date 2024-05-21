import { Component } from '@angular/core';
import { Foto } from '../../model/foto';
import { CommonModule } from '@angular/common';
import { FotoService } from '../../controller/foto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-cadastro2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app-cadastro2.component.html',
  styleUrl: './app-cadastro2.component.css'
})
export class AppCadastro2Component {
  vetFotos: Foto[] = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    }
  ];

  vFoto: Foto = {
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: ""
  };

  vFotoId: number = 0;

  constructor(private vFotoService: FotoService) {}

  carregaFotos(): void {
    this.vFotoService.findAll().subscribe(
      (pVetFotos) => {
        this.vetFotos = pVetFotos;
      }
    );
  }

  buscaFoto(pFotoId: number): void {
    this.vFotoService.findById(pFotoId).subscribe(
      (pFoto) => {
        this.vFoto = pFoto;
        this.vetFotos = [];
        this.vetFotos.push(this.vFoto);
      }
    )
  }

}
