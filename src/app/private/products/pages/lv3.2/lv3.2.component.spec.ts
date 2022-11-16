import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lv32Component } from './lv3.2.component';

describe('Lv32Component', () => {
  let component: Lv32Component;
  let fixture: ComponentFixture<Lv32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lv32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lv32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
