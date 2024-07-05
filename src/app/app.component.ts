import { Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'open-graph';
  constructor(private meta: Meta) {}
  ngOnInit(): void {
    this.meta.updateTag({ property: 'og:title', content: 'Bids n Buys - E-commerce Website' });
    this.meta.updateTag({ property: 'og:description', content: 'Dynamic description of the Exciting Auctions: Feel the adrenaline rush as you place your bids and outbid others. Experience the excitement of winning auctions and securing the items you desire.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://your-dynamic-image-url.com/image.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://dev.bidsnbuys.com/' });
  }
}