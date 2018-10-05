import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongkicklistComponent } from './songkicklist.component';

describe('SongkicklistComponent', () => {
  let component: SongkicklistComponent;
  let fixture: ComponentFixture<SongkicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongkicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongkicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
