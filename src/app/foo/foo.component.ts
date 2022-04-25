import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  result: string = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`http://jsonplaceholder.typicode.com/users`).subscribe(result => {
      this.result = JSON.stringify(result);
    })
  }

}
