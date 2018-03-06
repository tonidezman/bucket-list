import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bucket } from './bucket.model';
import { Location } from './location.model';

@Injectable()
export class BucketService {
  private host = 'https://challenge.3fs.si';
  private buckets: Bucket[] = [];
  private locations: Location[] = [];

  constructor(private httpClient: HttpClient) {}

  getBuckets(): Bucket[] {
    // getBuckets() {

    //   this.httpClient
    //     .get(`${this.host}/storage/buckets`, {
    //       headers: {
    //         Authorization: `Token `
    //       }
    //     })
    //     .subscribe(response => {
    //       console.log(response);
    //     });

    //   return [];
    localStorage.setItem('token', 'password123');
    const token = localStorage.getItem('token');
    console.log(token);

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

  getLocations(): Location[] {
    return [
      { id: 'some-id', name: 'Kranj' },
      { id: 'some-id', name: 'Ljubljana' }
    ];
  }
}
