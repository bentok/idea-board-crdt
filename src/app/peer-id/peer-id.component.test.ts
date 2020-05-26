import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerIdComponent } from './peer-id.component';

describe('PeerIdComponent', () => {
  let component: PeerIdComponent;
  let fixture: ComponentFixture<PeerIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerIdComponent ]
    })
      .overrideTemplate(PeerIdComponent, '<div></div>')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
