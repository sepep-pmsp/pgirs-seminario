import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
          horario: '9h',
          eixo: 'Café',
        },
        {
          horario: '9h30-10h',
          eixo: 'Abertura',
          escopo:'',
          componente: [
            'Rayne Ferretti Moraes — Onu-Habitat',
            'Rodrigo Ashiuchi — Secretaria do Verde e Meio Ambiente (Svma)',
          ],
        },
        {
          horario: '10h-12h',
          eixo: '1',
          mesa: 'Os desafios do saneamento básico e da segurança hídrica frente às mudanças climáticas',
          escopo:'A mesa abordará os impactos das mudanças climáticas no saneamento básico e na segurança hídrica, destacando desafios e estratégias para garantir a sustentabilidade dos recursos hídricos.',
          componente: 'Carlos Nobre — Academia Brasileira de Ciências',
        },
        {
          horario: '12h-14h',
          eixo: 'Almoço',
        },
        {
          horario: '14h-16h',
          eixo: '1',
          mesa: 'Como a integralidade e intersetorialidade do saneamento podem fortalecer a resiliência em direção à segurança hídrica',
          escopo:'A mesa vai mostrar como conectar diferentes áreas e adotar uma abordagem integrada no saneamento pode fortalecer a resiliência das comunidades e garantir segurança no acesso à água.',
          componente: [
            'Elcires Pimenta — Fundação Escola de Sociologia e Política de São Paulo',
            'Marussia Whately — Instituto Água e Saneamento (Ias)'
          ],
        },
        {
          horario: '16h-16h30',
          eixo: 'Intervalo-Café',
        },
        {
          horario: '16h30-18h30',
          eixo: '3',
          mesa: 'Desafios de governança, territorialidade e inclusão social na construção de planos transformadores de saneamento básico',
          escopo:'A mesa vai debater como criar planos de saneamento mais justos e transformadores capazes de lidar com os desafios de gestão, organização dos territórios e inclusão social.',
          componente: [
            'Francisca Adalgisa — Sabesp',
            'Gabriela Chabbouh — SVMA/UMAPAZ',
            'Estela Alves — UFABC'
          ],
        },
      ],
    },
    {
      data: '20 de fevereiro',
      eventos: [
        {
          horario: '8h30',
          eixo: 'Abertura-café',
        },
        {
          horario: '9h -10h30',
          eixo: '2',
          mesa: 'Abastecimento de água: desafios, potencialidades e inovação',
          escopo:'A mesa discutirá os principais desafios no abastecimento de água, destacando as oportunidades e inovações capazes de melhorar a gestão e garantir o acesso universal aos recursos hídricos.',
          componente: [
            'Monica Porto — Poli/USP',
            'Carlos José Teixeira Berenhauser — ABES',
          ],
        },
        {
          horario: '10h30-12h',
          eixo: '3',
          mesa: 'Esgotamento sanitário: desafios, potencialidades e inovação',
          escopo:'A mesa abordará os desafios e as oportunidades no esgotamento sanitário, destacando soluções inovadoras para melhorar a gestão e promover a sustentabilidade no setor.',
          componente: [
            'Adriano Tonetti — Unicamp',
            'Jonathan Espíndola —  Centro Internacional de Referência em Reúso de Água (Cirra/Ircwr/USP)',
            'Samanta Souza — Sabesp',
          ],
        },
        {
          horario: '',
          eixo: 'Almoço',
        },
        {
          horario: '14h-15h30',
          eixo: '1',
          mesa: 'Novos repertórios para a gestão e sistemas de manejo de água pluvial',
          escopo:'A mesa apresentará novas abordagens e soluções para a gestão da água pluvial, explorando estratégias inovadoras que unam eficiência e adaptação às mudanças climáticas.',
          componente: [
            'Luciana Travassos — UFABC',
            'Pedro Algodoal — FCTH',
            'Aluisio Canholi',
          ],
        },
        {
          horario: '15h30 - 16h',
          eixo: 'Intervalo-Café',
        },
        {
          horario: '16h - 18h',
          eixo: '3',
          mesa: 'Resíduos sólidos: desafios, potencialidades e inovação',
          escopo:'A mesa discutirá os desafios e as oportunidades na gestão de resíduos sólidos, destacando inovações e soluções para tornar o setor mais eficiente e sustentável.',
          componente: [
            'Dione Manetti — Instituto Pragma',
            'Fabrício Soler —  Fiesp',
            'Mariana Maia — Seas RJ',
            'João Manoel da Costa Neto —',
            'Mauro Haddad —',
          ],
        },
        {
          horario: '18h',
          eixo: 'Happy-hour',
        },
      ],
    },
  ];

  constructor(private router: Router) {} 
  formatarTexto(texto: string): string {
    return texto.replace(/\n/g, '<br>');
  }

  goToPalestrante(nome: string | undefined) {
    if (!nome) return;
    const formattedName = nome.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(['/palestrantes'], { fragment: 'palestrante-' + formattedName });
  }

  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }


  palestrantesMap: { [key: string]: string } = {
    'Monica Porto — Poli/USP': 'Monica Porto',
    'Carlos José Teixeira Berenhauser — ABES': 'Carlos José Teixeira Berenhauser',
    'Elcires Pimenta — Fundação Escola de Sociologia e Política de São Paulo': 'Elcires Pimenta',
    'Marussia Whately — Instituto Água e Saneamento (Ias)': 'Marussia Whately',
    'Francisca Adalgisa — Sabesp': 'Francisca Adalgisa',
    'Gabriela Chabbouh — SVMA/UMAPAZ': 'Gabriela Chabbouh',
    'Estela Alves — UFABC': 'Estela Alves',
    'Rayne Ferretti Moraes — Onu-Habitat': 'Rayne Ferretti Moraes',
    'Rodrigo Ashiuchi — Secretaria do Verde e Meio Ambiente (Svma)': 'Rodrigo Ashiuchi',
    'Adriano Tonetti — Unicamp': 'Adriano Tonetti',
    'Jonathan Espíndola — Centro Internacional de Referência em Reúso de Água (Cirra/Ircwr/USP)': 'Jonathan Espíndola',
    'Samanta Souza — Sabesp': 'Samanta Souza',
    'Luciana Travassos — UFABC': 'Luciana Travassos',
    'Pedro Algodoal — FCTH': 'Pedro Algodoal',
    'Aluisio Canholi': 'Aluisio Canholi',
    'Dione Manetti — Instituto Pragma': 'Dione Manetti',
    'Fabrício Soler — Fiesp': 'Fabrício Soler',
    'Mariana Maia — Seas RJ': 'Mariana Maia',
    'João Manoel da Costa Neto — ': 'João Manoel da Costa Neto',
    'Mauro Haddad — ': 'Mauro Haddad'
  };
}
