import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    // Send Http request
    this.http
      .post(
        'https://ng-complete-guide-c7ad5-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.error.error);
          console.error(error.status);
        },
      });
  }

  fetchPost() {
    return this.http
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
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  clearPost() {
    return this.http.delete(
      'https://ng-complete-guide-c7ad5-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
