import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Post } from './post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postForm!: NgForm;
  loadedPosts: Post[] = [];
  isfetching = false;
  error: string | null = null;
  private errorSub!: Subscription;
  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request

    this.postService.createAndStorePost(postData);
    this.postForm.reset();
  }

  onFetchPosts() {
    this.isfetching = true;
    this.postService.fetchPost().subscribe(
      (fetchData) => {
        this.loadedPosts = fetchData;
        this.isfetching = false;
      },
      (error) => {
        this.isfetching = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe;
  }
}
