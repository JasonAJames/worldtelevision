import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkNewsComponent } from './wink-news.component';

describe('WinkNewsComponent', () => {
  let component: WinkNewsComponent;
  let fixture: ComponentFixture<WinkNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
