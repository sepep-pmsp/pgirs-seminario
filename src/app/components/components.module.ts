import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { PalestrantesPageComponent } from './pages/palestrantes/palestrantes-page/palestrantes-page.component';
import { ProgramacaoPageComponent } from './pages/programacao/programacao-page/programacao-page.component';
import { VideoPageComponent } from './pages/live/video-page/video-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    PalestrantesPageComponent,
  ],
  imports: [
    CommonModule,
    ProgramacaoPageComponent,
    VideoPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    NgClass,
    NgFor
  ],
  exports: [ HomepageComponent, NavigationComponent, FooterComponent, PalestrantesPageComponent, VideoPageComponent]
})
export class ComponentsModule { }
