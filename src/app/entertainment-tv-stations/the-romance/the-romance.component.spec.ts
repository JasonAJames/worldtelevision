import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRomanceComponent } from './the-romance.component';

describe('TheRomanceComponent', () => {
  let component: TheRomanceComponent;
  let fixture: ComponentFixture<TheRomanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRomanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
