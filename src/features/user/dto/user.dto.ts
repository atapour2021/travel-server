import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseDTO } from 'src/database/dto/base.dto';

export class CreateUserDto extends BaseDTO {
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

export class UserFilterDto {
  name: string;
  family: string;
  from: Date;
  to: Date;
}
