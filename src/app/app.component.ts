import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Router, HttpClient, TranslateService]
})
export class AppComponent {
  title = 'oldberg';

  constructor(private router: Router,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang()!);
  }

  toggleNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarToggler && navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

  changeLang() {
    if (this.translate.currentLang ==='ru') {
      this.translate.use('en');
    } else {
      this.translate.use('ru');
    }
  }

  navigateToInfo(): void {
    this.router.navigate(['/info']);
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
