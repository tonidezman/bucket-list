import { Component, OnInit } from '@angular/core';

import { BucketService } from './../bucket.service';
import { Bucket } from './../bucket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-buckets',
  templateUrl: './all-buckets.component.html',
  styleUrls: ['./all-buckets.component.css']
})
export class AllBucketsComponent implements OnInit {
  showCreateBucketBtn = true;
  buckets: Bucket[] = [];
  bucketCount: number;

  constructor(public bucketService: BucketService, private router: Router) {}

  ngOnInit() {
    this.buckets = this.bucketService.getBuckets();
    this.bucketCount = this.buckets.length;

    if (this.router.url === '/buckets/new') {
      this.showCreateBucketBtn = false;
    }
  }
}
