import { Module,CacheModule } from '@nestjs/common';
import * as cacheManager from 'cache-manager';
// import * as redisStore from 'cache-manager-redis';
import * as ioredisStore from 'cache-manager-ioredis';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports:[CacheModule.registerAsync({
    useFactory: (configs: any) => ({
      store: ioredisStore,
      host: "localhost",
      port: '6379'
    }),
    isGlobal: true,
  }),],
  controllers: [UserController],
  providers: [
    UserService,
  ],
})
export class UserModule {}
