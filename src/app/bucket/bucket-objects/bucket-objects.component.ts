import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BucketService } from './../bucket.service';
import { Bucket } from './../bucket.model';
import { Object } from './../object.model';

@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-objects.component.html',
  styleUrls: ['./bucket-objects.component.css']
})
export class BucketDetailComponent implements OnInit {
  bucketId: string;
  bucket: Bucket = { id: '', name: '', location: { id: '', name: '' } };
  objects: Object[] = [];
  objectsCount = this.objects.length;

  constructor(
    private bucketService: BucketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bucketId = params['id'];

      this.bucketService
        .getBucket(bucketId)
        .subscribe((response: { bucket: Bucket }) => {
          this.bucket = response.bucket;
          console.log(this.bucket);
        });

      this.bucketService.getObjects(bucketId).subscribe((response: any) => {
        this.objects = response.objects;
        this.objectsCount = this.objects.length;
      });
    });
  }
}
