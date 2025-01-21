import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao-page',
  standalone: false,
  
  templateUrl: './programacao-page.component.html',
  styleUrl: './programacao-page.component.scss'
})
export class ProgramacaoPageComponent {
  divisoes: string[] = ['horario', 'eixo', 'mesa', 'componentes'];
  programacao = [
    {
      data: '19 de fevereiro',
      eventos: [
        {
          horario: '10h',
          eixo: 'II - Desafios das mudanças climáticas e segurança hídrica',
          mesa: 'Os desafios do saneamento básico e da segurança hídrica frente às mudanças climáticas',
          componente: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          horario: '14h',
          eixo: 'I - Integração dos componentes do saneamento',
          mesa: 'Como a integração dos quatro componentes do saneamento (água, esgoto, drenagem e resíduos sólidos) pode fortalecer a resiliência e melhorar a qualidade do sistema',
          componente: 'Palestrante 2',
        },
        {
          horario: '16h',
          eixo: 'Café',
        },
        {
          horario: '16:30h',
          eixo: 'III - Inovações tecnológicas e modelos de governança',
          mesa: 'Desafios de governança, territorialidade e inclusão social na construção de planos transformadores de saneamento básico',
          componente: '',
        },
      ],
    },
    {
      data: '20 de fevereiro',
      eventos: [
        {
          horario: '9h',
          eixo: 'II - Desafios das mudanças climáticas e segurança hídrica',
          mesa: 'Desafios da Agenda 2030 e das mudanças climáticas: saúde pública e disponibilidade hídrica',
          componente: 'Palestrante 1',
        },
        {
          horario: '11h',
          eixo: 'III - Inovações tecnológicas e modelos de governanças',
          mesa: 'Inovações tecnológicas no abastecimento de gua e saneamento: o que esperar',
          componente: 'Palestrante 2',
        },
        {
          horario: '14h',
          eixo: 'I - Integração dos componentes do saneamento',
          mesa: 'Gestão de águas pluviais e soluções baseadas na natureza (SbN)',
          componente: 'Palestrante 2',
        },
        {
          horario: '16h',
          eixo: 'Café',
        },
        {
          horario: '16:30h',
          eixo: 'III - Inovações tecnológicas e modelos de governanças',
          mesa: 'Resíduos sólidos: Inovações tecnológicas, destinação e disposição final',
          componente: '',
        },
        {
          horario: '18:30h',
          eixo: 'Encerramento',
        },
      ],
    },
  ];
}
