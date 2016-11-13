import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';
import { FieldWrapperComponent } from './field-wrapper.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent, FieldWrapperComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
