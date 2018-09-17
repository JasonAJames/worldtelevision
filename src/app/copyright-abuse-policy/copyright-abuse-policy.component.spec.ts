import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightAbusePolicyComponent } from './copyright-abuse-policy.component';

describe('CopyrightAbusePolicyComponent', () => {
  let component: CopyrightAbusePolicyComponent;
  let fixture: ComponentFixture<CopyrightAbusePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightAbusePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightAbusePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
