import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  lpVal!:boolean;
  active:string="home";
  project:boolean=false;

  constructor(private router:Router, private scroller: ViewportScroller) {
  }

  ngOnInit(): void {


   this.router.events.subscribe((event) => {
   if (event instanceof NavigationEnd) {
    console.log(event.url);
    event.url.includes('/project/')?this.lpVal=false:this.lpVal=true;
    event.url.includes('/project/')?this.project=true:this.project=false;
  }
  });

  }

  scroll(target:string){
    if(target=='home'){
      this.active=target;
    }
    else{
      this.active=target;
      this.scroller.scrollToAnchor(target);
    }
  }



  

 

}
