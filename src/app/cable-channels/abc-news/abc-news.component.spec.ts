import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcNewsComponent } from './abc-news.component';

describe('AbcNewsComponent', () => {
  let component: AbcNewsComponent;
  let fixture: ComponentFixture<AbcNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
