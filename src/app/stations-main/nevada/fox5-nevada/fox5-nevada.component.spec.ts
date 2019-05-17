import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox5NevadaComponent } from './fox5-nevada.component';

describe('Fox5NevadaComponent', () => {
  let component: Fox5NevadaComponent;
  let fixture: ComponentFixture<Fox5NevadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5NevadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5NevadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
