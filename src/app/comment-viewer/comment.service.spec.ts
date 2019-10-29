import { async, TestBed } from '@angular/core/testing';
import {CommentService} from './comment.service';
import {HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';

describe('CommentService', () => {
  let service: CommentService
  let mock: HttpTestingController
  let comments = [{
    "postId" : 1234,
    "id": 123,
    "name": "test user",
    "email": "abc@test.com",
    "body" : " test body" 
  }]
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    })
    service = TestBed.get(CommentService);
    mock = TestBed.get(HttpTestingController);
  });

  afterEach(() =>{
    mock.verify();
  })

  it('should retrieve comment from api', async () => {
     service.getCommentsForPost(10).subscribe(commentResponse =>{
       expect(commentResponse.length).toEqual(1);
       expect(commentResponse).toEqual(comments);
     })

     const httpRequest = mock.expectOne('http://localhost:8080/posts?postId=10');

     expect(httpRequest.request.method).toBe('GET');
     httpRequest.flush(comments);
  });

});