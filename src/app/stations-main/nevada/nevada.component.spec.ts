import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevadaComponent } from './nevada.component';

describe('NevadaComponent', () => {
  let component: NevadaComponent;
  let fixture: ComponentFixture<NevadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
