import { ApiProperty } from "@nestjs/swagger";

export default class BookEntity {
  @ApiProperty({
    type: String,
    example: "onepice"
  })
  nameBook: string;
}