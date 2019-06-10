import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox8WghpComponent } from './fox8-wghp.component';

describe('Fox8WghpComponent', () => {
  let component: Fox8WghpComponent;
  let fixture: ComponentFixture<Fox8WghpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox8WghpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox8WghpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
