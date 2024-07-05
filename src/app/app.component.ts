import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-graph';
  constructor(private metaService: Meta) {
    this.updateMetaTags();
}
updateMetaTags() {
  this.metaService.updateTag({ property: 'og:title', content: 'Your Dynamic Title' });
  this.metaService.updateTag({ property: 'og:type', content: 'website' });
  this.metaService.updateTag({ property: 'og:description', content: 'Your Dynamic Description' });
  this.metaService.updateTag({ property: 'og:image', content: 'dynamic-image.jpg' });
  this.metaService.updateTag({ property: 'og:url', content: './assers/meta_images/LangingPage1.png' });
}
}