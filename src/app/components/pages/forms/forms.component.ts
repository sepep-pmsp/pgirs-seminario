import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: false,
  
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  
constructor( 
      private router: Router
    ) {}

  navigateToPage() {
    this.router.navigate(['live-palestra']);
  }
}
