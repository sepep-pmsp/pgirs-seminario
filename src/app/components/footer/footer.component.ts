import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footer=[
    {
      img1:'assets/icons/onu-icon.svg',
      img2:'assets/images/VERDE_E_DO_MEIO_AMBIENTE_HORIZONTAL_FUNDO_CLARO.png',
    }
  ];
}
