import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bucket } from './bucket.model';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class BucketService {
  private host = 'https://challenge.3fs.si';
  private buckets: Bucket[] = [];

  constructor(private httpClient: HttpClient) {}

  getBuckets(): Bucket[] {
    // getBuckets() {
    //   this.httpClient
    //     .get(`${this.host}/storage/buckets`, {
    //       headers: {
    //         Authorization: // get this token from localStorage
    //       }
    //     })
    //     .subscribe((response: HttpResponse) => {
    //       console.log(response);
    //     });

    return (this.buckets = [
      {
        id: 'my-awesome-bucket',
        name: 'my-awesome-bucket',
        location: {
          id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
          name: 'Kranj'
        }
      },
      {
        id: 'my-other-bucket',
        name: 'my-other-bucket',
        location: {
          id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
          name: 'Kranj'
        }
      }
    ]);
  }
}
