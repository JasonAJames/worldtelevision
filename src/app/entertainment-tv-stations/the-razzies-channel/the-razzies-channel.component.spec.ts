import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRazziesChannelComponent } from './the-razzies-channel.component';

describe('TheRazziesChannelComponent', () => {
  let component: TheRazziesChannelComponent;
  let fixture: ComponentFixture<TheRazziesChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRazziesChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRazziesChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
