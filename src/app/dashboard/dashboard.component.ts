import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from "@angular/forms";
import { growOnlySet } from '../crdt/grow-only-set';

const idea = {
  name: null,
  description: null,
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ideaBoard = this.fb.group({
    ideas: this.fb.array([
      this.fb.group({
        name: '',
        description: '',
      }),
    ]),
  });
  
  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    const items: any[] = [];
    const [add, merge] = growOnlySet(items);
    console.log(merge(['hey']));
    const foo = globalThis.localStorage.getItem('items');
  }

  addIdea() {
    const ideas = this.ideaBoard.controls.ideas as FormArray;
    ideas.push(this.fb.group({
      name: '',
      description: '',
    }));
  }

}
