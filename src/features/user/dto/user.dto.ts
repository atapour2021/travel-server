import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt } from '@nestjs/class-validator';
import { BaseDTO } from 'src/database/dto/base.dto';

export class CreateUserDto extends BaseDTO {
  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  family: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: Number,
  })
  @IsInt()
  age: number;
}

export class UpdateUserDto extends CreateUserDto {}

export class UserFilterDto {
  name: string;
  family: string;
  from: Date;
  to: Date;
}

export class UpdateUserAgeDto {
  @ApiProperty()
  @ApiPropertyOptional({
    type: Number,
  })
  age: number;
}
