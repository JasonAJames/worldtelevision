import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmaxTvComponent } from './newsmax-tv.component';

describe('NewsmaxTvComponent', () => {
  let component: NewsmaxTvComponent;
  let fixture: ComponentFixture<NewsmaxTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsmaxTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsmaxTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
