import { Component, OnInit } from '@angular/core';
import projects from "./project.json";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects = projects as Object;
  landingPage:boolean=false;
  animate=false;
  id:string="";
  projectData:any;

  constructor(private router:Router, private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.animate=true;
    setTimeout(()=>{this.animate=false},2000);
    console.log(this.projects);
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id=String(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    console.log(this.projects[this.id as keyof typeof this.projects]);
    this.projectData=this.projects[this.id as keyof typeof this.projects];
    console.log(this.projectData.technologies);
    
  }

}
