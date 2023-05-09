import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIdComponent } from './exam-id.component';

describe('ExamIdComponent', () => {
  let component: ExamIdComponent;
  let fixture: ComponentFixture<ExamIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
