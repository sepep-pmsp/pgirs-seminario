import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-page',
  standalone: false,
  
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent{
  video: { title: string; video: SafeResourceUrl; type: string }[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.video = [
      {
        title: 'vídeo institucional',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gGr5a9apHOw?si=WOeIb4Dle_hZtbBt'),
        type: 'video/youtube'
      }
    ];
  }
}
