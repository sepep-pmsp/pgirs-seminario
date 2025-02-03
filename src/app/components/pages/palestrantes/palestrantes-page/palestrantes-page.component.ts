import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PalestranteService } from '../palestrante.service';
import { IMAGE_CONFIG } from '@angular/common';

@Component({
  selector: 'app-palestrantes-page',
  standalone: false,

  templateUrl: './palestrantes-page.component.html',
  styleUrl: './palestrantes-page.component.scss'
})
export class PalestrantesPageComponent implements OnInit {
  palestrante: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private palestrantesService: PalestranteService
  ) {}

  formatId(nome: string): string {
    return 'palestrante-' + nome.replace(/\s+/g, '-').toLowerCase();
  }

  ngOnInit() {
    this.palestrantesService.getPalestrantes().subscribe(data => {
      this.palestrante = data.map(itens => ({
        ...itens,
        img: itens.img?.trim() !== '' ? itens.img : null 
      }));
    });
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.error('Elemento não encontrado:', fragment);
          }
        }, 1000);
      }
    });
  }
}