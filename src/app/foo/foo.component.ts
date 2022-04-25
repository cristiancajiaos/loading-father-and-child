import { LoadingService } from './../shared/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FooService } from './foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  result: string = '';

  constructor(
    private http: HttpClient,
    private foo: FooService,
    private loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.foo.getFoo().subscribe(result => {
      this.result = JSON.stringify(result);
    });
  }

  reload(): void {
    this.result = '';
    this.foo.getFoo().subscribe((result) => {
      this.result = JSON.stringify(result);
    });
  }

}
