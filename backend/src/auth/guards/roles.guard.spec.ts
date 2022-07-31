//To access the route's role(s) (custom metadata), we'll use the Reflector helper class
import { Reflector } from '@nestjs/core';

import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  it('should be defined', () => {
    expect(new RolesGuard(new Reflector())).toBeDefined();
  });
});
