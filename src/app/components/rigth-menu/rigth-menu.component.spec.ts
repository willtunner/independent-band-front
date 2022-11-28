import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthMenuComponent } from './rigth-menu.component';

describe('RigthMenuComponent', () => {
  let component: RigthMenuComponent;
  let fixture: ComponentFixture<RigthMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigthMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
