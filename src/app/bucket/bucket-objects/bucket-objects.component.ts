import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as filesize from 'filesize';

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

  bucketName = '.';
  bucketId: string;
  bucket: Bucket = { id: '', name: '', location: { id: '', name: '' } };
  bucketStorageSize = '';
  isSelectedBucketDetailsTab: boolean;
  bucketObjects: BucketObject[] = [];
  selectedBucketObject: BucketObject;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private bucketService: BucketService,
    private route: ActivatedRoute,
    private elem: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bucketId = params['id'];
      this.isSelectedBucketDetailsTab =
        this.router.url.split('/')[3] === 'details';

      this.bucketService
        .getBucket(bucketId)
        .subscribe((response: { bucket: Bucket }) => {
          this.bucket = response.bucket;
          this.bucketName = this.bucket.name;
        });

      this.bucketService.getBucketObjects(bucketId);
      this.bucketService.changedObjectsBucket.subscribe(() => {
        this.bucketObjects = this.bucketService.bucketObjects;
        const sumBitSize = this.bucketObjects.reduce(
          (acc, currObj: BucketObject) => {
            return (acc += currObj.sizeInBites);
          },
          0
        );
        this.bucketStorageSize = filesize(sumBitSize, { round: 0 });
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

  deleteBucket(modalWindow) {
    modalWindow.close();
    this.bucketService.deleteBucket(this.bucket.id);
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
