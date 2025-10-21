import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post(
        'https://ng-complete-guide-c7ad5-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPost() {
    this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-c7ad5-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          if (responseData) {
            Object.keys(responseData).forEach((key) => {
              postArray.push({ ...responseData[key], id: key });
            });
          }
          return postArray;
        })
      )
      .subscribe((fetchData) => {
        console.log(fetchData);
      });
  }
}
