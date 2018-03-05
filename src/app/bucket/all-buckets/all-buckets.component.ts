import { Component, OnInit } from '@angular/core';

import { BucketService } from './../bucket.service';
import { Bucket } from './../bucket.model';

@Component({
  selector: 'app-all-buckets',
  templateUrl: './all-buckets.component.html',
  styleUrls: ['./all-buckets.component.css']
})
export class AllBucketsComponent implements OnInit {
  buckets: Bucket[] = [];
  bucketCount: number;

  constructor(public bucketService: BucketService) {}

  ngOnInit() {
    this.buckets = this.bucketService.getBuckets();
    this.bucketCount = this.buckets.length;
  }
}
