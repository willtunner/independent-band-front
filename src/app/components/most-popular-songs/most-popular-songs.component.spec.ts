import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularSongsComponent } from './most-popular-songs.component';

describe('MostPopularSongsComponent', () => {
  let component: MostPopularSongsComponent;
  let fixture: ComponentFixture<MostPopularSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPopularSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
