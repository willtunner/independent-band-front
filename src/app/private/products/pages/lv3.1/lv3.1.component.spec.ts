import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lv31Component } from './lv3.1.component';

describe('Lv31Component', () => {
  let component: Lv31Component;
  let fixture: ComponentFixture<Lv31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lv31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lv31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
