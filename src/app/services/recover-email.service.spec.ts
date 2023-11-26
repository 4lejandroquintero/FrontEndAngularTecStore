import { TestBed } from '@angular/core/testing';

import { RecoverEmailService } from './recover-email.service';

describe('RecoverEmailService', () => {
  let service: RecoverEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
