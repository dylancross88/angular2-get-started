import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  templateUrl: 'app/people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(p => this.people = p)
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }
}