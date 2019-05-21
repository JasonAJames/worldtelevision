import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLcComponent } from './shop-lc.component';

describe('ShopLcComponent', () => {
  let component: ShopLcComponent;
  let fixture: ComponentFixture<ShopLcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopLcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
