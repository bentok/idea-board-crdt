import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class DashboardComponent implements OnDestroy, OnInit {
  ideaBoard = this.fb.group({
    ideas: this.fb.array([
      this.fb.group({
        name: '',
        description: '',
      }),
    ]),
  });
  destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    const storageValue = globalThis.localStorage.getItem('items');
    const parsedValue = !!storageValue ? JSON.parse(storageValue) : [];
    this.ideaBoard.patchValue(parsedValue);
    this.ideaBoard.valueChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        (value) => {
          globalThis.localStorage.setItem('items', JSON.stringify(value))
        });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  handleIncomingChange(incoming) {
    const items = [];
    const [add, merge] = growOnlySet(incoming);
  }

  addIdea() {
    const ideas = this.ideaBoard.controls.ideas as FormArray;
    ideas.push(this.fb.group({
      name: '',
      description: '',
    }));
  }

  trackByFn: (i: number) => number = i => i;
}
