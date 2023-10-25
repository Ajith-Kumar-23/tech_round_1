import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  createPost(postData: any) {
    return this.http.post(`${this.baseUrl}/posts`, postData);
  }
}
