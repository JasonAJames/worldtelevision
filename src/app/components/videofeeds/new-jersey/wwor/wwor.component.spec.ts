import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WworComponent } from './wwor.component';

describe('WworComponent', () => {
  let component: WworComponent;
  let fixture: ComponentFixture<WworComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WworComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WworComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
