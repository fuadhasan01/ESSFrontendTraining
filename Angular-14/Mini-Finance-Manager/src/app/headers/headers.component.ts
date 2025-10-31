import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isActive(route: string): boolean {
    return window.location.pathname === route;
  }
}
