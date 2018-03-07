import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

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
  bucketObjects: BucketObject[] = [];
  selectedBucketObject: BucketObject;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
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

      this.bucketService.getBucketObjects(bucketId);

      this.bucketService.changedObjectsBucket.subscribe(() => {
        this.bucketObjects = this.bucketService.bucketObjects;
      });
    });
  }

  selectRow(bucketObject: BucketObject) {
    this.selectedBucketObject = bucketObject;
  }

  isSelected(bucketObject: BucketObject) {
    if (!this.selectedBucketObject) {
      return;
    }
    return this.selectedBucketObject.name === bucketObject.name;
  }

  deleteBucketObject(modalWindow) {
    modalWindow.close();

    this.bucketService.deleteBucketObject(
      this.bucket.id,
      this.selectedBucketObject.name
    );
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
