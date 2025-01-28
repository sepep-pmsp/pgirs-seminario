import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Fecha o menu ao navegar para outra rota
    this.router.events.subscribe(() => {
      this.closeMenu();
    });
  }

  toggleMenu() {
    // Alterna o estado do menu
    this.isMenuOpen = !this.isMenuOpen;
    const checkbox = document.getElementById('navi-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = this.isMenuOpen;
    }
  }

  closeMenu() {
    // Fecha o menu
    this.isMenuOpen = false;
    const checkbox = document.getElementById('navi-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
