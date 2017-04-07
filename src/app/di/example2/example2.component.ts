import {Component, OnInit} from '@angular/core';
import {DiSharedService} from "../di-shared.service";
import {DiOwnService} from "../di-own.service";

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
  providers: [
    DiOwnService
  ]
})
export class Example2Component implements OnInit {

  constructor(private diSharedService: DiSharedService,
              private diOwnService: DiOwnService) {
    this.diSharedService.printMsg('1123213132134');
  }

  ngOnInit() {
  }

}
