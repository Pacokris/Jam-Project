import { TestBed } from '@angular/core/testing';

import { SongkicklistcatcherService } from './songkicklistcatcher.service';

describe('SongkicklistcatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongkicklistcatcherService = TestBed.get(SongkicklistcatcherService);
    expect(service).toBeTruthy();
  });
});
