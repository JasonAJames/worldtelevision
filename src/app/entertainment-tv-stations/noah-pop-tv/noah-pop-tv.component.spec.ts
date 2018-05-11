import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoahPopTvComponent } from './noah-pop-tv.component';

describe('NoahPopTvComponent', () => {
  let component: NoahPopTvComponent;
  let fixture: ComponentFixture<NoahPopTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoahPopTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoahPopTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
