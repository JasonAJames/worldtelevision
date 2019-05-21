import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryTvComponent } from './jewelry-tv.component';

describe('JewelryTvComponent', () => {
  let component: JewelryTvComponent;
  let fixture: ComponentFixture<JewelryTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelryTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
