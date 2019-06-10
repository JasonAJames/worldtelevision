import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox6NewsComponent } from './fox-6-news.component';

describe('Fox6NewsComponent', () => {
  let component: Fox6NewsComponent;
  let fixture: ComponentFixture<Fox6NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox6NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox6NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
