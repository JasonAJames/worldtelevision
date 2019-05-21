import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhslTvComponent } from './khsl-tv.component';

describe('KhslTvComponent', () => {
  let component: KhslTvComponent;
  let fixture: ComponentFixture<KhslTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhslTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhslTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
