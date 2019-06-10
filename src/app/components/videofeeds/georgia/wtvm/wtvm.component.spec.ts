import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtvmComponent } from './wtvm.component';

describe('WtvmComponent', () => {
  let component: WtvmComponent;
  let fixture: ComponentFixture<WtvmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtvmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
