import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox40KtxlComponent } from './fox40-ktxl.component';

describe('Fox40KtxlComponent', () => {
  let component: Fox40KtxlComponent;
  let fixture: ComponentFixture<Fox40KtxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox40KtxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox40KtxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
