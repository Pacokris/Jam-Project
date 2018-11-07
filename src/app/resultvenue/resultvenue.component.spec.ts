import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultvenueComponent } from './resultvenue.component';

describe('ResultvenueComponent', () => {
  let component: ResultvenueComponent;
  let fixture: ComponentFixture<ResultvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
