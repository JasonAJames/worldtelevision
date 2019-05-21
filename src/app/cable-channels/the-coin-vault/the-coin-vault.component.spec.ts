import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCoinVaultComponent } from './the-coin-vault.component';

describe('TheCoinVaultComponent', () => {
  let component: TheCoinVaultComponent;
  let fixture: ComponentFixture<TheCoinVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCoinVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCoinVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
