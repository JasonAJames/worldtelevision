import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissMultiverseComponent } from './miss-multiverse.component';

describe('MissMultiverseComponent', () => {
  let component: MissMultiverseComponent;
  let fixture: ComponentFixture<MissMultiverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissMultiverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissMultiverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
