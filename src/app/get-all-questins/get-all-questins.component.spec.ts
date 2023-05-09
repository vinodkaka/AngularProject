import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllQuestinsComponent } from './get-all-questins.component';

describe('GetAllQuestinsComponent', () => {
  let component: GetAllQuestinsComponent;
  let fixture: ComponentFixture<GetAllQuestinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllQuestinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllQuestinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
