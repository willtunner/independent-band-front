import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistcsComponent } from './statistcs.component';

describe('StatistcsComponent', () => {
  let component: StatistcsComponent;
  let fixture: ComponentFixture<StatistcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
