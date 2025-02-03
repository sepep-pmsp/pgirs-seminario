import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramacaoService } from '../programacao.service';
import { PalestranteService } from '../../palestrantes/palestrante.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-programacao-page',
  standalone: false,
  templateUrl: './programacao-page.component.html',
  styleUrls: ['./programacao-page.component.scss']
})
export class ProgramacaoPageComponent implements OnInit {
  divisoes: string[] = ['horario', 'eixo', 'mesa', 'componentes'];
  programacao: any[] = [];
  palestrante: any[] = [];
  last: any;

  formatContent(componentes: string[]): string {
    return componentes.join('<br>');
  }

  goToPalestrante(nome: string | undefined) {
    if (!nome) return;
    const formattedName = this.formatarIdPalestrante(nome);
    this.router.navigate(['/palestrantes'], { fragment: formattedName }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(formattedName);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Elemento com ID ${formattedName} não encontrado!`);
        }
      }, 500);
    });
  }

  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }

  getNomePalestrante(abbreviation: string): string {
    const palestrante = this.palestrante.find(p => p.abbreviation === abbreviation);
    console.log(`Abbreviation: ${abbreviation}, Nome Completo: ${palestrante ? palestrante.nome : 'Não encontrado'}`);
    return palestrante ? palestrante.nome : abbreviation;
  }

  constructor(
    private programacaoService: ProgramacaoService,
    private palestrantesService: PalestranteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    forkJoin([
      this.programacaoService.getProgramacao(),
      this.palestrantesService.getPalestrantes()
    ]).subscribe(([programacaoData, palestranteData]) => {
      this.programacao = programacaoData;
      this.palestrante = palestranteData;

      this.programacao.forEach(event => {
        event.eventos.forEach((ev: any) => {
          if (ev.componente) {
            ev.componente = ev.componente
              .filter((item: any) => typeof item === 'object' && item.id) 
              .map((item: any) => {
                const palestrante = this.palestrante.find(p => p.id === item.id);
                if (palestrante) {
                  return palestrante.abbreviation;
                } else {
                  console.warn(`Palestrante não encontrado para o ID: ${item.id}`);
                  return `Desconhecido (${item.id})`;
                }
              });
          }
        });
      });
    });
  }
  
  
  formatarIdPalestrante(nome: any): string {
    if (nome && typeof nome === 'string') {
      return 'palestrante-' + nome.replace(/\s+/g, '-').toLowerCase();
    }
    console.warn(`Nome não é uma string válida: ${nome}`);
    return '';
  }
}