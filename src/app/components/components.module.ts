import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { PalestrantesPageComponent } from './pages/palestrantes/palestrantes-page/palestrantes-page.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    PalestrantesPageComponent,
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
