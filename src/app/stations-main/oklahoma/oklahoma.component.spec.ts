import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OklahomaComponent } from './oklahoma.component';

describe('OklahomaComponent', () => {
  let component: OklahomaComponent;
  let fixture: ComponentFixture<OklahomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OklahomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OklahomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
