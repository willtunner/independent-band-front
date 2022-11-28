import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatButtomComponent } from './float-buttom.component';

describe('FloatButtomComponent', () => {
  let component: FloatButtomComponent;
  let fixture: ComponentFixture<FloatButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
