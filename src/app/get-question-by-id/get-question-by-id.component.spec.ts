import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionByIdComponent } from './get-question-by-id.component';

describe('GetQuestionByIdComponent', () => {
  let component: GetQuestionByIdComponent;
  let fixture: ComponentFixture<GetQuestionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQuestionByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQuestionByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
