import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-page',
  standalone: false,
  
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent implements OnInit {
  video: { title: string; video: SafeResourceUrl; type: string }[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.video = [
      {
        title: 'vídeo institucional',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0v5HoXHDmEM?si=DBV7RwknhOetBTzf'),
        type: 'video/youtube'
      }
    ];
  }
    mostrarPopup = true;
    codigoDigitado = '';
    erroCodigo = false;
    acessoLiberado = false;
    mostrarAviso = false;
    codigoCorreto = 'ACESSO985';
  
    ngOnInit(): void {
      if (localStorage.getItem('codigo_acesso')) {
        this.mostrarPopup = false;
        this.acessoLiberado = true;
      }
    }
  
    verificarCodigo() {
      if (this.codigoDigitado === this.codigoCorreto) {
        localStorage.setItem('codigo_acesso', 'true');
        this.mostrarPopup = false;
        this.acessoLiberado = true;
      } else {
        this.erroCodigo = true;
        this.mostrarAviso = true;
      }
    }
}
