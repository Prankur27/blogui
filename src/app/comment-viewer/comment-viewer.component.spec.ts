import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';

import {Component, Directive} from '@angular/core';
import {CommentViewerComponent} from './comment-viewer.component';
import {CommentService} from './comment.service';
import { Observable, of, throwError } from 'rxjs';
import { CommentComponent } from './comment/comment.component';

@Injectable()
class MockCommentService { 
    getCommentsForPost():Observable<Comment []>{
        return of(new Array());
      }
}

describe('CommentViewerComponent', () => {
  let fixture;
  let component;
  let service: CommentService;
  let comments = [{
    "postId" : 1234,
    "id": 123,
    "name": "test user",
    "email": "abc@test.com",
    "body" : " test body" 
  }]

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          CommentComponent,
          CommentViewerComponent
      ],
      providers: [
        {provide: CommentService, useClass: MockCommentService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(CommentViewerComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(CommentService);
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  
  it('should get comments from service', async () => {
    //Given
    // user has selected a post with id 1
    expect(component.comments).toBe(undefined)
    component.postId = "1";
    spyOn(service,'getCommentsForPost').and.returnValue(
      of(comments)
    )
    //When
    component.getComments();
    //Then
    expect(component.comments[0].name).toBe("test user")
    expect(component.comments[0].body).toBe(" test body")
    
  });

  it('should return error from service', async () => {
    //Given
    // user has selected a post with id 1
    expect(component.comments).toBe(undefined)
    component.postId = "1";
    spyOn(service,'getCommentsForPost').and.callFake(()=>{ return throwError(new Error('Test error'))})
    
    //When
    component.getComments();
    //Then
    expect(component.comments).toBe(undefined)
    expect(component.showCommentErrorOnFailure).toBe(true)
    
  });

});