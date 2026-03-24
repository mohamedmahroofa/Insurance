
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, HeroCarouselComponent, InfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
