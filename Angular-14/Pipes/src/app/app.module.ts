import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { RepeatTextPipe } from './repeat-text.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { SaveButtonComponent } from './save-button/save-button.component';
import { ToastComponent } from './app-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    RepeatTextPipe,
    FilterPipe,
    SaveButtonComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
