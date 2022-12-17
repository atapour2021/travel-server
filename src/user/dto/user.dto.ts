import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  readonly id: number;

  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  name: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  family: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: Number,
  })
  age: number;
}

export class UpdateUserDto extends CreateUserDto {}
