import { TestBed } from '@angular/core/testing';

import { AgentauthService } from './agentauth.service';

describe('AgentauthService', () => {
  let service: AgentauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
