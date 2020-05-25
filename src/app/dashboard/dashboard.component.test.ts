import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        DashboardComponent,
      ],
    })
      .overrideTemplate(DashboardComponent, '<div></div>')
      .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
