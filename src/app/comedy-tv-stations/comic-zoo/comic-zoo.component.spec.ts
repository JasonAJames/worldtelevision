import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicZooComponent } from './comic-zoo.component';

describe('ComicZooComponent', () => {
  let component: ComicZooComponent;
  let fixture: ComponentFixture<ComicZooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicZooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
