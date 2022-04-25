import { Component, OnInit } from '@angular/core';
import {LectionService} from "./lection.service";

@Component({
  selector: 'app-lection',
  templateUrl: './lection.component.html',
  styleUrls: ['./lection.component.scss']
})
export class LectionComponent implements OnInit {
  value: any;
  v: any;

  constructor(
    public lectionService:LectionService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    // this.lectionService.getUsers().subscribe(value => console.log(value));
    this.lectionService.getUsers().subscribe(value => value);
  }
}
