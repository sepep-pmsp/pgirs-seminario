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
      
      img:'',
      title2:'Palestrante Z',
      title4:'Cargo',
      title5:'Ocupação',
      descripiton:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem i',
    },
    {
      img:'',
      title2:'Palestrante X',
      title4:'Cargo',
      title5:'Ocupação',
      descripiton:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem i',
    },
    {
      img:'',
      title2:'Palestrante Y',
      title4:'Cargo',
      title5:'Ocupação',
      descripiton:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem i',
    }
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
          }
        }, 500);
      }
    });
  }
}
