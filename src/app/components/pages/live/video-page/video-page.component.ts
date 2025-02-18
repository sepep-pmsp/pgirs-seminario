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
    this.definirVideo();
  }

  definirVideo() {
    const hoje = new Date().getDate();

    let videoUrl = 'https://www.youtube.com/embed/gGr5a9apHOw?si=WOeIb4Dle_hZtbBt';
    let titulo = 'Vídeo Institucional';

    if (hoje === 19) {
      videoUrl = 'https://www.youtube.com/embed/-8Yhn0OjBJU?si=kpb2JtIe3bxs2Zvn';
      titulo = 'Live - Dia 19';
    } else if (hoje === 20) {
      videoUrl = 'https://www.youtube.com/embed/JegP_9qvEjI?si=Q8g19SRp-JzwFNrW';
      titulo = 'Live - Dia 20';
    }

    this.video = [
      {
        title: titulo,
        video: this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl),
        type: 'video/youtube'
      }
    ];
  }
}
