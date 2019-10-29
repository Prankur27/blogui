import { async, TestBed } from '@angular/core/testing';
import {UserandpostService} from './userandpost.service';
import {HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';
import { User } from './user/User.model';

describe('UserandpostService', () => {
  let service: UserandpostService
  let mock: HttpTestingController
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
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]
    
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      },
      "post":[
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]
    }
  ];
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserandpostService]
    })
    service = TestBed.get(UserandpostService);
    mock = TestBed.get(HttpTestingController);
  });

  afterEach(() =>{
    mock.verify();
  })

  it('should retrieve user and posts from api', async () => {
     service.getUserAndPost().subscribe(userandposts =>{
       expect(userandposts.length).toEqual(2);
       expect(userandposts).toEqual(users);
     })

     const httpRequest = mock.expectOne('http://localhost:8080/usersandposts');

     expect(httpRequest.request.method).toBe('GET');
     httpRequest.flush(users);
  });

});