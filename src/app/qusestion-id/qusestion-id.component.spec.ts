import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusestionIdComponent } from './qusestion-id.component';

describe('QusestionIdComponent', () => {
  let component: QusestionIdComponent;
  let fixture: ComponentFixture<QusestionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QusestionIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QusestionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
