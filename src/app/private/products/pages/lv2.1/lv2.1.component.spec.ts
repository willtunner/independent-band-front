import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lv21Component } from './lv2.1.component';

describe('Lv21Component', () => {
  let component: Lv21Component;
  let fixture: ComponentFixture<Lv21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lv21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lv21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
