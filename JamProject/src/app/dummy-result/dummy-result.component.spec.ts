import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyResultComponent } from './dummy-result.component';

describe('DummyResultComponent', () => {
  let component: DummyResultComponent;
  let fixture: ComponentFixture<DummyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
