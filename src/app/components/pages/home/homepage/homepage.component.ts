import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  home = [
    {
      img_home: 'assets/images/complete-logo.svg',
      data_:'19 e 20/2',
      local_:'UMAPAZ - Universidade Aberta do Meio Ambiente e Cultura de Paz',
      adress_:'Av. Quarto Centenário, 1268 - Jardim Luzitania, São Paulo',
      strong_data:'Data:',
      strong_local:'Local:',
      class_data: '_data_',
      class_local: 'local',
      class_adress: 'adress',

      txt_1:'Organizado pela Prefeitura de São Paulo, em parceria com Programa das Nações Unidas para os Assentamentos Humanos (ONU-Habitat), o seminário vai envolver questões relacionadas aos Planos Municipais de Saneamento Básico (PMSB) e de Gestão Integrada de Resíduos Sólidos (PGIRS), em desenvolvimento.',
      txt_2:'A programação inclui debates sobre temas fundamentais para a cidade, como os desafios do saneamento básico e da segurança hídrica, a integração dos quatro componentes do saneamento (água, esgoto, drenagem e resíduos sólidos), soluções baseadas na natureza (SbN) e inovações tecnológicas para a gestão eficiente de resíduos sólidos, além de outros tópicos pertinentes.',
      txt_3:'O seminário também abordará os desafios impostos pelas mudanças climáticas, que tornam cada vez mais urgente a busca por soluções inovadoras e adaptativas. Dessa forma, o evento vai promover a troca de experiências e a apresentação de projetos e iniciativas que possam contribuir para a modernização e o avanço dos sistemas de saneamento e gestão de resíduos sólidos em São Paulo.',
    }
  ];
}
