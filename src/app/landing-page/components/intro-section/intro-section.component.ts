import { Component, OnInit } from '@angular/core';
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {

  fahand=faHandSparkles;
  constructor() { }

  ngOnInit(): void {
  }

}
