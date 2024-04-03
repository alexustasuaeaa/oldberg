import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Router]
})
export class AppComponent {
  title = 'oldberg';

  constructor(private router: Router) {

  }

  toggleNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarToggler && navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

  navigateToOldberg(): void {
    this.router.navigate(['/oldberg']);
    this.toggleNavbar();
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
    this.toggleNavbar();
  }

  navigateToMusic(): void {
    this.router.navigate(['/music']);
    this.toggleNavbar();
  }

  navigateToContacts(): void {
    this.router.navigate(['/contacts']);
    this.toggleNavbar();
  }
}
