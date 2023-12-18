import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images = [
    { source: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', alt: 'Description for Image 1' },
    { source: 'https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-game-cool-water-image_2375586.jpg', alt: 'Description for Image 2' },
    { source: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fanimated-background&psig=AOvVaw2oKkf5X77RWN6dwvXFy8hx&ust=1703011016530000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNC4ycfQmYMDFQAAAAAdAAAAABAj', alt: 'Description for Image 3' },
  ];
}
