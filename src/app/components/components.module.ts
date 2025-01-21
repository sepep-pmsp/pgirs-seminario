import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { PalestrantesPageComponent } from './pages/palestrantes/palestrantes-page/palestrantes-page.component';
import { ProgramacaoPageComponent } from './pages/programacao/programacao-page/programacao-page.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    PalestrantesPageComponent,
    ProgramacaoPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgClass,
    NgFor
  ],
  exports: [ HomepageComponent, NavigationComponent, FooterComponent, PalestrantesPageComponent,]
})
export class ComponentsModule { }
