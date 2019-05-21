import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfonTvComponent } from './kfon-tv.component';

describe('KfonTvComponent', () => {
  let component: KfonTvComponent;
  let fixture: ComponentFixture<KfonTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfonTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfonTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
