import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovialistComponent } from './movialist/movialist.component';
import { MoviaDetailComponent } from './movia-detail/movia-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './api-interceptor.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';





@NgModule({
  declarations: [
    AppComponent,
    MovialistComponent,
    MoviaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
