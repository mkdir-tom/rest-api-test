import { CACHE_MANAGER, Controller, Get, Inject, Query } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { Cache } from 'cache-manager'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import BookEntity from './entity/book.entity'
import QueryBookDto from './dto/query-book.dto'

@Controller('books')
@ApiTags('books')
export class BooksController {
  @Inject(CACHE_MANAGER) private cacheManager: Cache

  constructor(private readonly userService: UsersService) {}

  @ApiResponse({
    status: 200,
    description: 'Success',
    type: BookEntity,
  })
  @ApiBearerAuth()
  @ApiOperation({ summary: 'testse' })
  @Get('get-book')
  async get(@Query() query: QueryBookDto): Promise<string> {
    console.log('ssssss')
    const { username } = query
    const value = await this.cacheManager.get(`${username}-auth`)
    if (!value) {
      await this.cacheManager.set(`${username}-auth`, 1, { ttl: 60 * 60 * 5 })
    }
    const res = await this.cacheManager.get(`${username}-auth`)
    console.log(res)
    return 'sucess'
  }
}
