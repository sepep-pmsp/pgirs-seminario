import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/home/homepage/homepage.component';
import { PalestrantesPageComponent } from './components/pages/palestrantes/palestrantes-page/palestrantes-page.component';
import { ProgramacaoPageComponent } from './components/pages/programacao/programacao-page/programacao-page.component';
import { VideoPageComponent } from './components/pages/live/video-page/video-page.component';
import { FormsComponent } from './components/pages/forms/forms.component';


const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomepageComponent },
  { path: 'palestrantes', component: PalestrantesPageComponent },
  { path: 'programacao', component: ProgramacaoPageComponent },
  { path: 'live-palestra', component: VideoPageComponent },
  { path: 'inscrição', component: FormsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
