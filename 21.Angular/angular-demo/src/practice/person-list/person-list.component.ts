import { Component, Input, OnInit } from '@angular/core';
import { person } from './../model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Input('person')
  person:person[] = [];
  constructor() { }
  ngOnInit(): void {
  }

}
