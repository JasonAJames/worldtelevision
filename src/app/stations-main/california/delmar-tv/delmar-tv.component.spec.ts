import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelmarTvComponent } from './delmar-tv.component';

describe('DelmarTvComponent', () => {
  let component: DelmarTvComponent;
  let fixture: ComponentFixture<DelmarTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelmarTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelmarTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
