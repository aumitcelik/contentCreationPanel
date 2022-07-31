import { SetMetadata } from '@nestjs/common';
//Nest provides the ability to attach custom metadata to route handlers through the @SetMetadata() decorator. 
import { Role } from '../enums/role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
