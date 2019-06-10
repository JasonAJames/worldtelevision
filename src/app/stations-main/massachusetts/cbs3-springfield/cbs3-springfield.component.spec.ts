import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbs3SpringfieldComponent } from './cbs3-springfield.component';

describe('Cbs3SpringfieldComponent', () => {
  let component: Cbs3SpringfieldComponent;
  let fixture: ComponentFixture<Cbs3SpringfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cbs3SpringfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cbs3SpringfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
