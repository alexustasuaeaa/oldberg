import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-oldberg-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './oldberg.component.html',
  styleUrl: './oldberg.component.scss',
  providers: [RouterOutlet, Router, TranslateModule]
})
export class OldbergComponent {

  constructor (private translate: TranslateService) {

  }
}
