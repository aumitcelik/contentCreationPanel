//Controllers always belong to a module, which is why we include the controllers array within the @Module() decorator.
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    ContentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
