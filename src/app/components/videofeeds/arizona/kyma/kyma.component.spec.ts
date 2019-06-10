import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KymaComponent } from './kyma.component';

describe('KymaComponent', () => {
  let component: KymaComponent;
  let fixture: ComponentFixture<KymaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KymaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KymaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
