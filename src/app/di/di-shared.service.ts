import {Injectable} from '@angular/core';
import {DiNestedService} from "./di-nested.service";

@Injectable()
export class DiSharedService {

  constructor(private diNested: DiNestedService) {
    console.info('--- DiSharedService works');
  }

  printMsg(msg) {
    console.log(msg);
    this.diNested.log();
  }
}
