import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgtnAmericaComponent } from './cgtn-america.component';

describe('CgtnAmericaComponent', () => {
  let component: CgtnAmericaComponent;
  let fixture: ComponentFixture<CgtnAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgtnAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgtnAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
