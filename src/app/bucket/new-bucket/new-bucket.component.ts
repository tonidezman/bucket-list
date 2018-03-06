import { BucketService } from './../bucket.service';
import { Component, OnInit } from '@angular/core';

import { Location } from './../location.model';

@Component({
  selector: 'app-new-bucket',
  templateUrl: './new-bucket.component.html',
  styleUrls: ['./new-bucket.component.css']
})
export class NewBucketComponent implements OnInit {
  constructor(private bucketService: BucketService) {}
  locations: Location[] = [];

  ngOnInit() {
    this.locations = this.bucketService.getLocations();
  }
}
