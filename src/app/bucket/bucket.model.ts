import { Location } from './location.model';

export class Bucket {
  constructor(
    public id: string,
    public name: string,
    public location: Location
  ) {}
}
