import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
