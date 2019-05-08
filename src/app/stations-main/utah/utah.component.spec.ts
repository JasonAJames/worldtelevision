import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtahComponent } from './utah.component';

describe('UtahComponent', () => {
  let component: UtahComponent;
  let fixture: ComponentFixture<UtahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
