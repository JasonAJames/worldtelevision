import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox5DcComponent } from './fox5-dc.component';

describe('Fox5DcComponent', () => {
  let component: Fox5DcComponent;
  let fixture: ComponentFixture<Fox5DcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5DcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5DcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
