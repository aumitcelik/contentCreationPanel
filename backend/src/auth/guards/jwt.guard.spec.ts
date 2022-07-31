import { JwtGuard } from './jwt.guard';
// only requests with a valid JWT Token can be successful.
describe('JwtGuard', () => {
  it('should be defined', () => {
    expect(new JwtGuard()).toBeDefined();
  });
});
