import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox13TampaComponent } from './fox13-tampa.component';

describe('Fox13TampaComponent', () => {
  let component: Fox13TampaComponent;
  let fixture: ComponentFixture<Fox13TampaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox13TampaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox13TampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
