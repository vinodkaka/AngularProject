import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterExamIdComponent } from './enter-exam-id.component';

describe('EnterExamIdComponent', () => {
  let component: EnterExamIdComponent;
  let fixture: ComponentFixture<EnterExamIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterExamIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterExamIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
