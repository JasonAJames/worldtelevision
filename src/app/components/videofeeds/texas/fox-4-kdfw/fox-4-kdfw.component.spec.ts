import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox4KdfwComponent } from './fox-4-kdfw.component';

describe('Fox4KdfwComponent', () => {
  let component: Fox4KdfwComponent;
  let fixture: ComponentFixture<Fox4KdfwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox4KdfwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox4KdfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
