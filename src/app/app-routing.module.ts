import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/home/homepage/homepage.component';
import { PalestrantesPageComponent } from './components/pages/palestrantes/palestrantes-page/palestrantes-page.component';
import { ProgramacaoPageComponent } from './components/pages/programacao/programacao-page/programacao-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomepageComponent },
  { path: 'palestrantes', component: PalestrantesPageComponent },
  { path: 'programacao', component: ProgramacaoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
