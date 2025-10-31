import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transactions/transaction-list/transaction-list-item/transaction-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionItemEditComponent } from './transactions/transaction-list/transaction-list-item/transaction-item-edit/transaction-item-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionItemEditComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
