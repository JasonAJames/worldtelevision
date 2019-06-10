import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox35WoflComponent } from './fox35-wofl.component';

describe('Fox35WoflComponent', () => {
  let component: Fox35WoflComponent;
  let fixture: ComponentFixture<Fox35WoflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox35WoflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox35WoflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
