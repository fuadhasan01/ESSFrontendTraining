// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './app/post.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // makes HttpClient available
    PostService, // provide your service here
  ],
});
