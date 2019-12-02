import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovialistComponent } from './movialist/movialist.component';
import { MoviaDetailComponent } from './movia-detail/movia-detail.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/movialist',
    pathMatch :'full'
  }, {
    path: 'movialist',
    component: MovialistComponent,
    data: { title: 'MoviaList' }
  },
  {
    path: 'moviadetail/:i',
    component: MoviaDetailComponent,
    data: { title: 'Movia Details' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
