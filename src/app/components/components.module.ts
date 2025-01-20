import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ HomepageComponent, NavigationComponent, FooterComponent,]
})
export class ComponentsModule { }
