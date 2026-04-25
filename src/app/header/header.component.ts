
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { InfoComponent } from '../info/info.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, HeroCarouselComponent, InfoComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
