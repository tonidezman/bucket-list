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
  locationObserver;

  ngOnInit() {
    this.bucketService.getLocations();
    this.locations = this.bucketService.locations;
    this.locationObserver = this.bucketService.changedLocation.subscribe(() => {
      this.locations = this.bucketService.locations;
    });
  }

  onSubmit(data: { 'bucket-name': string; 'bucket-location': string }) {
    this.bucketService.saveBucket(data);
  }
}
