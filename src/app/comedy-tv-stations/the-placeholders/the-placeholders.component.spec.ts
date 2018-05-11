import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePlaceholdersComponent } from './the-placeholders.component';

describe('ThePlaceholdersComponent', () => {
  let component: ThePlaceholdersComponent;
  let fixture: ComponentFixture<ThePlaceholdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePlaceholdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
