import { Injectable } from '@angular/core';

import { Bucket } from './bucket.model';

@Injectable()
export class BucketService {
  constructor() {}

  getBuckets(): Bucket[] {
    return [
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
    ];
  }
}
