import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgClass
  ],
  exports: [ HomepageComponent, NavigationComponent, FooterComponent,]
})
export class ComponentsModule { }
