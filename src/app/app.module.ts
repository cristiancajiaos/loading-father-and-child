import { RequestHandleInterceptor } from './interceptors/request-handle.interceptor';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestHandleInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandleInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
