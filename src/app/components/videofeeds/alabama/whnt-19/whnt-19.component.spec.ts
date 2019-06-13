import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whnt19VideoComponent } from './whnt-19.component';

describe('Whnt19VideoComponent', () => {
  let component: Whnt19VideoComponent;
  let fixture: ComponentFixture<Whnt19VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whnt19VideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whnt19VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
