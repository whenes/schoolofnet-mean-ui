import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  fetchServer() {
    return this.http.get(this.url);
  }

  fetch(slug): Observable<Post> {
    return this.http.get(`${this.url}/posts/${slug}`).pipe(map((response: any) => response.post));
  }

  fetchAll(): Observable<Post[]> {
    return this.http.get(`${this.url}/posts`).pipe(map((response: any) => response.posts));
  }

  save(title: String, body: String): Observable<Post> {
    const data = JSON.stringify({ title, body });
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    };
    return this.http.post(`${this.url}/posts`, data, options).pipe(map((response: any) => response));
  }
}
