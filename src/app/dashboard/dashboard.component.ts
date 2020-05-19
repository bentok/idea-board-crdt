import { Component } from '@angular/core';
import { growOnlySet } from '../crdt/grow-only-set';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ngOnInit() {
    globalThis.localStorage.setItem('items', JSON.stringify({ hello: 'world' }));
    const foo = globalThis.localStorage.getItem('items');
    console.log(foo);
  }
}
