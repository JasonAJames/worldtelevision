import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khou11TexasComponent } from './khou-11-texas.component';

describe('Khou11TexasComponent', () => {
  let component: Khou11TexasComponent;
  let fixture: ComponentFixture<Khou11TexasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khou11TexasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khou11TexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
