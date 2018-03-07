import { BucketObject } from './bucket-object.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
import * as _ from 'lodash';

import { Bucket } from './bucket.model';
import { Location } from './location.model';
import { AuthorizationService } from './../authorization.service';

@Injectable()
export class BucketService {
  public buckets: Bucket[] = [];
  public locations: Location[] = [];
  public changedLocation = new Subject();
  public changedBucket = new Subject();
  private host = 'https://challenge.3fs.si';

  constructor(
    private httpClient: HttpClient,
    private authorizationService: AuthorizationService
  ) {}

  getBucket(bucketId: string): Observable<Object> {
    return this.httpClient.get(`${this.host}/storage/buckets/${bucketId}`, {
      headers: {
        Authorization: `Token ${this.authorizationService.getToken()}`
      }
    });
  }

  getObjects(bucketId: string): Observable<Object> {
    return this.httpClient.get(
      `${this.host}/storage/buckets/${bucketId}/objects`,
      {
        headers: {
          Authorization: `Token ${this.authorizationService.getToken()}`
        }
      }
    );
  }

  getBuckets() {
    this.httpClient
      .get(`${this.host}/storage/buckets`, {
        headers: {
          Authorization: `Token ${this.authorizationService.getToken()}`
        }
      })
      .subscribe(
        (response: { buckets: Bucket[] }) => {
          this.buckets = response.buckets;
          this.changedBucket.next();
        },
        error => {
          // TODO notify user if server responds with an error
        }
      );
  }

  getLocations() {
    this.httpClient
      .get(`${this.host}/storage/locations`, {
        headers: {
          Authorization: `Token ${this.authorizationService.getToken()}`
        }
      })
      .subscribe((response: { locations: Location[] }) => {
        this.locations = response.locations;
        this.changedLocation.next();
      });
  }

  saveBucketObject(bucketId, formData) {
    return this.httpClient
      .post(`${this.host}/storage/buckets/${bucketId}/objects`, formData, {
        headers: {
          Authorization: `Token ${this.authorizationService.getToken()}`
        }
      })
      .subscribe(
        response => {
          console.log(JSON.stringify(response));
          // this.changedBucket.next();
        },
        error => {
          console.log(JSON.stringify(error));
          // TODO notify user if server responds with an error
        }
      );
  }

  saveBucket(data: { 'bucket-name': string; 'bucket-location': string }) {
    const location = _.find(
      this.locations,
      (obj: Location) => obj.name === data['bucket-location']
    );

    const newBucket = new Bucket(
      _.uniqueId(data['bucket-name']),
      data['bucket-name'],
      location
    );

    this.createBucket(newBucket);
  }

  createBucket(bucket) {
    bucket.location = bucket.location.id;

    return this.httpClient
      .post(`${this.host}/storage/buckets`, bucket, {
        headers: {
          Authorization: `Token ${this.authorizationService.getToken()}`
        }
      })
      .subscribe(
        response => {
          this.getBuckets();
          this.changedBucket.next();
        },
        error => {
          // TODO notify user if server responds with an error
        }
      );
  }
}
