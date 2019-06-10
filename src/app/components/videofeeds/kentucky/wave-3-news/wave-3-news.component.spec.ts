import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wave3NewsComponent } from './wave-3-news.component';

describe('Wave3NewsComponent', () => {
  let component: Wave3NewsComponent;
  let fixture: ComponentFixture<Wave3NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wave3NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wave3NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
