import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBandsComponent } from './list-bands.component';

describe('ListBandsComponent', () => {
  let component: ListBandsComponent;
  let fixture: ComponentFixture<ListBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
