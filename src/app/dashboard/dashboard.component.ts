import { Component } from '@angular/core';
import {growOnlySet} from "../crdt/grow-only-set";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ngOnInit() {
    console.log(growOnlySet<number>());
  }
}
