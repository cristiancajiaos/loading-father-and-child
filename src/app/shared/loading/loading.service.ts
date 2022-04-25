import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  requestNumber = 0;
  requestNumberSubject = new BehaviorSubject(this.requestNumber);

  constructor() { }

  handleRequest(status: string): void {
    this.requestNumber = status.match('start') ? this.requestNumber + 1 : this.requestNumber - 1;
    this.requestNumberSubject.next(this.requestNumber);
  }

  getRequestStatus(): Observable<number> {
    return this.requestNumberSubject.asObservable();
  }
}
