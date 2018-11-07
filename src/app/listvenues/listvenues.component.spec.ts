import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvenuesComponent } from './listvenues.component';

describe('ListvenuesComponent', () => {
  let component: ListvenuesComponent;
  let fixture: ComponentFixture<ListvenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
