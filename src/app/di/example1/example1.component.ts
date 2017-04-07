import {Component, OnInit} from '@angular/core';
import {DiSharedService} from "../di-shared.service";
import {DiOwnService} from "../di-own.service";

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  providers: [
    DiOwnService
  ]
})
export class Example1Component implements OnInit {

  constructor(
    private diSharedService: DiSharedService,
    private diOwnService: DiOwnService
  ) {
  }

  ngOnInit() {
    this.diSharedService.printMsg('1232321');
  }

}
