import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading = true;

  constructor(
    private loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.loading.getRequestStatus().subscribe(requests => {
      this.isLoading = (requests > 0);
    });
  }

}
