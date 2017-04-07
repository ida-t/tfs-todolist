import {Injectable} from '@angular/core';

@Injectable()
export class DiNestedService {

  constructor() {
    console.info('--- DiNestedService works');
  }


  log() {
    console.log('--- hey');
  }

}
