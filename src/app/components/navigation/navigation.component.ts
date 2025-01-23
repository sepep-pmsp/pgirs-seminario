import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isMenuOpen = false;
  constructor(
    private route: ActivatedRoute, 
    private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.closeMenu();
    });
  }
  closeMenu() {
    this.isMenuOpen = false;
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
