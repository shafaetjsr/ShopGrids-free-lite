import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var tns: any;  // Declare tns as a global variable

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Note: this should be 'styleUrls' not 'styleUrl'
})
export class AppComponent implements OnInit {
  title = 'ShopGrids-free-lite';

  ngOnInit(): void {
    this.initializeSliders();
  }

  initializeSliders(): void {
    // Hero Slider
    tns({
      container: '.hero-slider',
      slideBy: 'page',
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 0,
      items: 1,
      nav: false,
      controls: true,
      controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
    });

    // Brand Slider
    tns({
      container: '.brands-logo-carousel',
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 15,
      nav: false,
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        540: {
          items: 3,
        },
        768: {
          items: 5,
        },
        992: {
          items: 6,
        }
      }
    });
  }
}
