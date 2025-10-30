import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { CommonModule } from '@angular/common'; // for *ngFor etc.

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data as any[];
    });
  }
}
