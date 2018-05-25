import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News4OklahomaComponent } from './news4-oklahoma.component';

describe('News4OklahomaComponent', () => {
  let component: News4OklahomaComponent;
  let fixture: ComponentFixture<News4OklahomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News4OklahomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News4OklahomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
