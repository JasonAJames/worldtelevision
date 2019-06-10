import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtocComponent } from './wtoc.component';

describe('WtocComponent', () => {
  let component: WtocComponent;
  let fixture: ComponentFixture<WtocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
