import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wsb2AtlantaComponent } from './wsb-2-atlanta.component';

describe('Wsb2AtlantaComponent', () => {
  let component: Wsb2AtlantaComponent;
  let fixture: ComponentFixture<Wsb2AtlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wsb2AtlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wsb2AtlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
