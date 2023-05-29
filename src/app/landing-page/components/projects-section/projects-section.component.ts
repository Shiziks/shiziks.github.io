import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import * as projects from './projects.json';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  showProject(){
  }

}
