import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

//////////
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faAngular, faJs, faPhp, faCss3, faSass, faGithub } from '@fortawesome/free-brands-svg-icons'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
  ],
  exports: [

  ]
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee, faHtml5, faAngular, faJs, faPhp, faCss3, faSass, faGithub);
  }
}
