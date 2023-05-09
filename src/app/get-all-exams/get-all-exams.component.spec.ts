import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllExamsComponent } from './get-all-exams.component';

describe('GetAllExamsComponent', () => {
  let component: GetAllExamsComponent;
  let fixture: ComponentFixture<GetAllExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
