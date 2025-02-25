import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-page',
  standalone: false,
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent {
  videos: { date: string; title: string; video: SafeResourceUrl; youtubeUrl: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      {
        date: '19 de Fevereiro de 2025',
        title: 'Seminário Planos Municipais de Saneamento e Gestão de Resíduos Sólidos - SP',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-8Yhn0OjBJU?si=ZPBiOwntuNTaDeC6'),
        youtubeUrl: 'https://www.youtube.com/-8Yhn0OjBJU?si=ZPBiOwntuNTaDeC6'
      },
      {
        date: '20 de Fevereiro de 2025',
        title: 'Seminário Planos Municipais de Saneamento e Gestão de Resíduos Sólidos - SP',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/JegP_9qvEjI?si=nGryn4SDPC7R8noK'),
        youtubeUrl: 'https://www.youtube.com/JegP_9qvEjI?si=nGryn4SDPC7R8noK'
      }
    ];
  }
}
