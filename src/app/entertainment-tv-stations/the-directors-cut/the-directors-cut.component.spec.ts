import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDirectorsCutComponent } from './the-directors-cut.component';

describe('TheDirectorsCutComponent', () => {
  let component: TheDirectorsCutComponent;
  let fixture: ComponentFixture<TheDirectorsCutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheDirectorsCutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDirectorsCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
