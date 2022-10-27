import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export default class QueryBookDto {
  @ApiProperty({
    type: String,
    example: 'shinpei',
  })
  @IsString()
  username: string

  @ApiPropertyOptional({
    type: Number,
    example: 1,
  })
  @IsOptional()
  age: number
}
