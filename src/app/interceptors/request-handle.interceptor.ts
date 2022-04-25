import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../shared/loading/loading.service';

@Injectable()
export class RequestHandleInterceptor implements HttpInterceptor {

  constructor(
    private loading: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loading.handleRequest('start');
    return next.handle(request).pipe(
      finalize(() => {
        this.loading.handleRequest('end');
      })
    )
  }
}
