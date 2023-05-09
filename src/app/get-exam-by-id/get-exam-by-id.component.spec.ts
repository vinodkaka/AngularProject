import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExamByIdComponent } from './get-exam-by-id.component';

describe('GetExamByIdComponent', () => {
  let component: GetExamByIdComponent;
  let fixture: ComponentFixture<GetExamByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetExamByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetExamByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
