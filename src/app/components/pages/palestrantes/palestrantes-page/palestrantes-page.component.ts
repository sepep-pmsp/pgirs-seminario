import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-palestrantes-page',
  standalone: false,

  templateUrl: './palestrantes-page.component.html',
  styleUrl: './palestrantes-page.component.scss'
})
export class PalestrantesPageComponent implements OnInit {
  palestrante = [
    {

      img: '',
      title2: 'Rayne Ferretti Moraes ',
      descripiton: 'Chefe do escritório Onu-Habitat do Brasil e oficial a cargo do Escritório do Cone Sul. Graduada em Relações Internacionais pelo Centro Universitário Metodista Bennett e mestre em Relações Internacionais pela PUC-Rio. Há 20 anos trabalha no Escritório Regional para América Latina e o Caribe do ONU-Habitat. Lecionou no Curso de Relações Internacionais do Centro Universitário Metodista Bennett de 2008 a 2013.',
    },
    {
      img: '',
      title2: 'Carlos Nobre',
      descripiton: 'Reconhecido como um dos climatologistas mais renomados do Brasil, possui doutorado em Meteorologia pelo MIT e ampla experiência em pesquisa e gestão científica. Foi coordenador de importantes instituições, como o CPTEC-INPE e o CEMADEN, além de ter atuado como cientista-chefe do Experimento LBA. É membro da Academia Brasileira de Ciências e integrou a equipe agraciada com o Prêmio Nobel da Paz de 2007.',
    },
    {
      img: '',
      title2: 'Elcires Pimenta Freire',
      descripiton: 'Coordenador de projetos da Fundação Escola de Sociologia e Política de São Paulo. Possui experiência na área de engenharia de produção, com ênfase em gestão ambiental, atuando principalmente com políticas públicas de saneamento, planos municipais e regionais de saneamento básico, gestão de resíduos sólidos urbanos, resíduos de serviços de saúde, dentre outros.',
    },
    {
      img: '',
      title2: 'Marussia Whately',
      descripiton: 'Arquiteta e urbanista, com trajetória em organizações do terceiro setor como o Instituto Socioambiental (ISA) e o Instituto Democracia e Sustentabilidade (IDS). É idealizadora da Aliança pela Água e atualmente é diretora executiva do Instituto Água e Saneamento - IAS',
    },
    {
      img: '',
      title2: 'Francisca Adalgisa da Silva',
      descripiton: 'Formada em Ciências Sociais pela Fundação Santo André, com pós-graduação em Gestão Ambiental pelo Senac e em Gestão de Políticas Públicas pela UNIFESP. É mestre em Planejamento e Gestão de Territórios pela Universidade Federal do ABC. Possui mais de 36 anos de experiência no setor de saneamento básico.',
    },
    {
      img: '',
      title2: 'Gabriela Chabbouh',
      descripiton: 'Graduada em Relações Internacionais e Direito, com mestrado em Políticas Públicas e especializações em Sustentabilidade. Atualmente, coordena a área de Educação Ambiental da UMAPAZ (Universidade Aberta do Meio Ambiente e Cultura de Paz), vinculada à Secretaria Municipal do Verde e do Meio Ambiente.',
    },
    {
      img: '',
      title2: 'Estela Alves ',
      descripiton: 'Arquiteta e urbanista, doutora em ciência ambiental pelo PROCAM e pós-doutora pelo Instituto de Energia e Ambiente e pelo Instituto de Estudos Avançados da USP. Atualmente é pesquisadora na UFABC, no projeto Territórios da Água, financiado pela FAPESP. Faz parte do grupo de trabalho Emergência Climática e Cidades do Instituto de Arquitetos do Brasil (IAB) e é representante do  IAB no CADES - Conselho Municipal do Meio Ambiente e Desenvolvimento Sustentável da cidade de São Paulo.',
    },
    {
      img: '',
      title2: 'Monica Porto',
      descripiton: 'Engenheira civil formada pela Escola Politécnica da USP, foi diretora de Sistemas Regionais da Sabesp e secretária adjunta de Saneamento e Recursos Hídricos do Estado de São Paulo. É professora titular aposentada da Escola Politécnica da Universidade de São Paulo.',
    },
    {
      img: '',
      title2: 'Carlos Berenhauser',
      descripiton: 'Diretor e coordenador da Câmara Técnica de Perdas da ABES São Paulo, engenheiro civil com 30 anos de experiência no setor de saneamento básico, com foco em controle operacional e redução de perdas de água. Atua na ENOPS Engenharia desde 1992, onde atualmente exerce o cargo de CEO.',
    },
    {
      img: '',
      title2: 'Adriano Luiz Tonetti',
      descripiton: 'Graduado em Engenharia Química, com Mestrado e Doutorado em Engenharia Civil, com ênfase em Saneamento e Ambiente, pela Universidade Estadual de Campinas (UNICAMP). Responsável pela Área de Coleta e Tratamento de Esgotos, desenvolveu pesquisas relacionadas a saneamento rural, saneamento descentralizado, remoção de nitrogênio em reatores anaeróbios e reúso agrícola de águas residuais.',
    },
    {
      img: '',
      title2: 'Jonathan Espíndola',
      descripiton: 'Professor na Escola Politécnica da Universidade de São Paulo. Pesquisador no Centro Internacional de Referência em Reúso de Água (CIRRA/IRCWR/USP). Doutor em Engenharia do Ambiente pelo Departamento de Engenharia Química da Faculdade de Engenharia da Universidade do Porto. Graduado em Engenharia Ambiental pela Universidade Federal de Minas Gerais.',
    },
    {
      img: '',
      title2: 'Luciana Travassos',
      descripiton: 'Arquiteta e urbanista formada pela FAUUSP, com mestrado e doutorado em Ciência Ambiental pelo PROCAM-USP. Atua como docente na UFABC, integrando o Bacharelado em Ciências e Humanidades, o curso de Planejamento Territorial, que atualmente coordena, e o programa de Pós-graduação em Planejamento e Gestão do Território.',
    },
    {
      img: '',
      title2: 'Dione Manetti',
      descripiton: 'CEO da Pragma Soluções Sustentáveis e presidente do Instituto Pragma. Bacharel em Direito e especialista em gestão de resíduos, com mais de 20 anos de experiência em reciclagem, logística reversa e economia circular. Atuou como diretor de fomento na Secretaria Nacional de Economia Solidária entre 2003 e 2010 e foi responsável por coordenar o fechamento do lixão de Jardim Gramacho, o maior da América Latina, em 2012.',
    },
    {
      img: '',
      title2: 'Fabrício Soler',
      descripiton: 'Diretor de Saneamento Básico na FIESP. É professor e advogado especialista em Direito Ambiental e Direito dos Resíduos. Atuou como consultor para a ONU para o Desenvolvimento Industrial e para a Confederação Nacional da Indústria (CNI) em projetos relacionados a resíduos e circularidade.',
    },
    {
      img: '',
      title2: 'Mariana Maia',
      descripiton: 'Superintendente de resíduos sólidos e economia circular na Secretaria de Estado do Ambiente e Sustentabilidade do Rio de Janeiro - SEASE. É especialista em gestão pública e economia circular e advogada com pós-graduação em gestão ambiental e direito ambiental. Atualmente, é mestranda em Engenharia Urbana e Ambiental, bem como em Políticas Públicas. Atualmente, atua como consultora de Economia Circular da ONU-Habitat, contribuindo para o Plano de Gestão Integrada de Resíduos Sólidos (PGIRS) da cidade de São Paulo.',
    },
    {
      img: '',
      title2: 'João Manoel da Costa Neto',
      descripiton: 'Diretor Presidente da SP Regula. Advogado formado pela Universidade Municipal de São Caetano do Sul – USCS, ocupou os cargos de diretor de contratos e convênios, assessor parlamentar e chefe de gabinete da Secretaria de Estado da Cultura, foi secretário municipal de cultura de São Caetano do Sul entre 2017 e 2021.',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  formatId(nome: string): string {
    return 'palestrante-' + nome.replace(/\s+/g, '-').toLowerCase();
  }

  ngOnInit() {
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
