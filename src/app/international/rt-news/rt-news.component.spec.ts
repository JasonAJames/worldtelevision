import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtNewsComponent } from './rt-news.component';

describe('RtNewsComponent', () => {
  let component: RtNewsComponent;
  let fixture: ComponentFixture<RtNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
