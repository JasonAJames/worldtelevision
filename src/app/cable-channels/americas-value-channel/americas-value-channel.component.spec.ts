import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericasValueChannelComponent } from './americas-value-channel.component';

describe('AmericasValueChannelComponent', () => {
  let component: AmericasValueChannelComponent;
  let fixture: ComponentFixture<AmericasValueChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericasValueChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericasValueChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
