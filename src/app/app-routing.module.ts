import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/home/homepage/homepage.component';
import { PalestrantesPageComponent } from './components/pages/palestrantes/palestrantes-page/palestrantes-page.component';
import { ProgramacaoPageComponent } from './components/pages/programacao/programacao-page/programacao-page.component';
import { VideoPageComponent } from './components/pages/live/video-page/video-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomepageComponent },
  { path: 'palestrantes', component: PalestrantesPageComponent },
  { path: 'programacao', component: ProgramacaoPageComponent },
  { path: 'live-palestra', component: VideoPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
