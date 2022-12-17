import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMusicsComponent } from './notice-musics.component';

describe('NoticeMusicsComponent', () => {
  let component: NoticeMusicsComponent;
  let fixture: ComponentFixture<NoticeMusicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeMusicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
