import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bucket } from './bucket.model';
import { Location } from './location.model';
import { AuthorizationService } from './../authorization.service';

@Injectable()
export class BucketService {
  private host = 'https://challenge.3fs.si';
  private buckets: Bucket[] = [];
  private locations: Location[] = [];

  constructor(
    private httpClient: HttpClient,
    private authorizationService: AuthorizationService
  ) {}

  getBuckets(): Bucket[] {
    this.httpClient
      .get(`${this.host}/storage/buckets`, {
        headers: {
          Authorization: `Token ${this.authorizationService.getToken()}`
        }
      })
      .subscribe(response => {
        console.log(response);
      });

    return [];

    // return (this.buckets = [
    //   {
    //     id: 'my-awesome-bucket',
    //     name: 'my-awesome-bucket',
    //     location: {
    //       id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
    //       name: 'Kranj'
    //     }
    //   },
    //   {
    //     id: 'my-other-bucket',
    //     name: 'my-other-bucket',
    //     location: {
    //       id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
    //       name: 'Kranj'
    //     }
    //   }
    // ]);
  }

  getLocations(): Location[] {
    return [
      { id: 'some-id', name: 'Kranj' },
      { id: 'some-id', name: 'Ljubljana' }
    ];
  }
}
