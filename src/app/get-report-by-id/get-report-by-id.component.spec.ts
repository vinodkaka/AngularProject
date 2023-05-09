import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReportByIdComponent } from './get-report-by-id.component';

describe('GetReportByIdComponent', () => {
  let component: GetReportByIdComponent;
  let fixture: ComponentFixture<GetReportByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReportByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReportByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
