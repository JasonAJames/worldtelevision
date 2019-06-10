import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox26KrivComponent } from './fox-26-kriv.component';

describe('Fox26KrivComponent', () => {
  let component: Fox26KrivComponent;
  let fixture: ComponentFixture<Fox26KrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox26KrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox26KrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
