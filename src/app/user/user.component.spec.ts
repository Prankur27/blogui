import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {UserComponent} from './user.component';
import {UserandpostService} from '../userandpost.service';
import { Observable, of, throwError } from 'rxjs';
import { User } from './User.model';

@Injectable()
class MockUserandpostService { 
  getUserAndPost():Observable<User []>{
    return of(new Array());
  }
}

describe('UserComponent', () => {
  let fixture;
  let component;
  let service:UserandpostService;
  let users= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "post":[
        {
          "userId": 1,
          "id": 1,
          "title": "test title",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      providers: [
        {provide: UserandpostService, useClass: MockUserandpostService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    
    component = fixture.componentInstance;
    service = TestBed.get(UserandpostService);
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should return user and posts from service', async () => {
    //Given
    expect(component.showLoader).toBe(true);
    expect(component.users).toBe(undefined);
    spyOn(service,'getUserAndPost').and.returnValue(
      of(users)
    )
    //When
    component.getUserAndPost();
    //Then
    expect(component.users[0].name).toBe("Leanne Graham")
    expect(component.users[0].post[0].title).toBe("test title")
    expect(component.showLoader).toBe(false)
  });

  it('should fail user and posts from service', async () => {
    //Given
    expect(component.showLoader).toBe(true);
    expect(component.users).toBe(undefined);
    spyOn(service,'getUserAndPost').and.callFake(()=>{ return throwError(new Error('Test error'))})
    
    //When
    component.getUserAndPost();
    //Then
    expect(component.users).toBe(undefined)
    expect(component.showErrorOnFailure).toBe(true)
    expect(component.showLoader).toBe(false)
  });



});