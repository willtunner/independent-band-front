import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBandFormComponent } from './add-band-form.component';

describe('AddBandFormComponent', () => {
  let component: AddBandFormComponent;
  let fixture: ComponentFixture<AddBandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBandFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
