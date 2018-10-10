import { TestBed } from '@angular/core/testing';

import { EventCatcherService } from './event-catcher.service';

describe('EventCatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCatcherService = TestBed.get(EventCatcherService);
    expect(service).toBeTruthy();
  });
});
