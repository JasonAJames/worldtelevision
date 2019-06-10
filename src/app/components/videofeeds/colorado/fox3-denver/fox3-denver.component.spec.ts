import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox3DenverComponent } from './fox3-denver.component';

describe('Fox3DenverComponent', () => {
  let component: Fox3DenverComponent;
  let fixture: ComponentFixture<Fox3DenverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox3DenverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox3DenverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
