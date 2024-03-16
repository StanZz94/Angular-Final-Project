import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [
    { src: '../assets/img/img1.jpg', alt: 'Image 1', title: 'Learn', subtitle: 'Tips and tricks in spotting treasure!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' },
    { src: '../assets/img/img2.jpg', alt: 'Image 2', title: 'Protect', subtitle: 'Nature the environment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' },
    { src: '../assets/img/img3.jpg', alt: 'Image 3', title: 'Protect', subtitle: 'Nature the environment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' }
  ];
  currentImageIndex = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}