import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceresultComponent } from './placeresult.component';

describe('PlaceresultComponent', () => {
  let component: PlaceresultComponent;
  let fixture: ComponentFixture<PlaceresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
