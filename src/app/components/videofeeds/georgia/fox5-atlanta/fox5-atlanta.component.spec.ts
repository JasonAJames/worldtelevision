import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox5AtlantaComponent } from './fox5-atlanta.component';

describe('Fox5AtlantaComponent', () => {
  let component: Fox5AtlantaComponent;
  let fixture: ComponentFixture<Fox5AtlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5AtlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5AtlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
