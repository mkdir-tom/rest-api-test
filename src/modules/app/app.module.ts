import { CacheModule, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BooksModule } from '../books/books.module'
import { UsersModule } from '../users/users.module'
import { ConfigModule } from '@nestjs/config'
import configuration from '../../config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    BooksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
