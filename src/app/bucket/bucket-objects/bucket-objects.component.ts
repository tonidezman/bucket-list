import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import { BucketService } from './../bucket.service';
import { Bucket } from './../bucket.model';
import { BucketObject } from './../bucket-object.model';

@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-objects.component.html',
  styleUrls: ['./bucket-objects.component.css']
})
export class BucketDetailComponent implements OnInit {
  @ViewChild('fileInput') fileInput;

  bucketId: string;
  bucket: Bucket = { id: '', name: '', location: { id: '', name: '' } };
  objects: Object[] = [];
  objectsCount = this.objects.length;

  constructor(
    private bucketService: BucketService,
    private route: ActivatedRoute,
    private elem: ElementRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bucketId = params['id'];

      this.bucketService
        .getBucket(bucketId)
        .subscribe((response: { bucket: Bucket }) => {
          this.bucket = response.bucket;
        });

      this.bucketService.getObjects(bucketId).subscribe((response: any) => {
        this.objects = response.objects;
        this.objectsCount = this.objects.length;
      });
    });
  }

  openFileModal() {
    this.elem.nativeElement.querySelector('#uploadFile').click();
  }

  fileChange(event) {
    this.clickSubmit();
  }

  onSubmit() {
    const files: FileList = this.fileInput.nativeElement.files;
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append('file', files[0], files[0].name);
    this.bucketService.saveBucketObject(this.bucket.id, formData);
  }

  clickSubmit() {
    this.elem.nativeElement.querySelector('#submit-button').click();
  }
}
