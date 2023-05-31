import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProjectComponent } from './landing-page/components/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,

  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    useHash: true
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
