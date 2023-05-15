import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    IntroSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule, 
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    LandingPageComponent,
    IntroSectionComponent,
    ProjectsSectionComponent
  ]
})
export class LandingPageModule { }
