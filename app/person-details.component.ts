import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  moduleId: module.id,
  selector: 'person-details',
  templateUrl: './person-details.component.html'
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;
  personForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router,
              private _fb: FormBuilder) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting person with id: ', id);
      this.peopleService
          .get(id)
          .subscribe(
            p => this.person = p,
            e => this.errorMessage = e,
            () => this.isLoading = false);
    });

    console.log("This Person = " + JSON.stringify(this.person));
    console.log("This Error = " + this.errorMessage);

    this.personForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      weight: ['', <any>Validators.required],
      height: ['', <any>Validators.required]
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList() {
    window.history.back();
  }

  savePersonDetails(){
    this.peopleService
        .save(this.person)
        .subscribe(
          (r: Response) => {console.log('success');}
        );
  }

}