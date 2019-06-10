import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmbfComponent } from './wmbf.component';

describe('WmbfComponent', () => {
  let component: WmbfComponent;
  let fixture: ComponentFixture<WmbfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmbfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmbfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
