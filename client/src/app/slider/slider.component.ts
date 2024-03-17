import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [
    { src: 'https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_1280.jpg', alt: 'Image 1', title: 'Explore', subtitle: 'legends for ancient treasures!', description: '', link: '' },
    { src: 'https://img.freepik.com/premium-photo/raw-gold-nugget-illustration_708697-383.jpg', alt: 'Image 2', title: 'GOLD', subtitle: 'Mining, Extracting and melting!', description: '', link: '' },
    { src: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/911dd2e35c60185771c9f9f39a5a29dbdad813a8ee239fc050ff9687b91773c1._RI_TTW_SX1080_FMjpg_.jpg', alt: 'Image 3', title: 'Crystals', subtitle: 'Gem Hunting, Polishing and Handcrafting', description: '', link: '' }
  ];
  currentImageIndex = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 3 seconds
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}