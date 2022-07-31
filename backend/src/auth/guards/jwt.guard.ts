/* no need to set up custom providers, and check if everything is synchronized
when implementing some interface there is a single file which has a deal with tokens and interfaces
when need to implement one new interface just import token and interface and add it to proper place in existing class */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {}
//This class will be also called, whenever we need authentication on our sensitive endpoints.
