import { CacheModule, Module } from '@nestjs/common'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'
import { UsersModule } from '../users/users.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          store: redisStore,
          host: configService.get('redis.host'),
          port: configService.get('redis.port'),
        } as any),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
