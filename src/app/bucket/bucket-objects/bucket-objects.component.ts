import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bucket } from './../bucket.model';
import { BucketService } from './../bucket.service';

@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-objects.component.html',
  styleUrls: ['./bucket-objects.component.css']
})
export class BucketDetailComponent implements OnInit {
  bucketId: string;
  bucket: Bucket;

  constructor(
    private bucketService: BucketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
    });
  }
}
