import { AsideComponent } from './aside/aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { InstagramComponent } from './instagram/instagram.component';
import { DonorsComponent } from './donors/donors.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PromoComponent } from './promo/promo.component';
import { AboutComponent } from './about/about.component';
import { IconsComponent } from './icons/icons.component';
import { CausesComponent } from './causes/causes.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AsideComponent, HeaderComponent, FooterComponent, SubscribeComponent, InstagramComponent, DonorsComponent, BlogsComponent, PromoComponent, AboutComponent, IconsComponent, CausesComponent, ProjectsComponent, EventsComponent, TextSectionComponent, TestimonialComponent, MainMenuComponent, CounterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AsideComponent, HeaderComponent, FooterComponent, SubscribeComponent, InstagramComponent, DonorsComponent, BlogsComponent, PromoComponent, AboutComponent, IconsComponent, CausesComponent, ProjectsComponent, EventsComponent, TextSectionComponent,TestimonialComponent]
})
export class ComponentModule { }
