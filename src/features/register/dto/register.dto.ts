import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseDTO } from 'src/database/dto/base.dto';

export class CreateRegisterDto extends BaseDTO {
  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  fullName: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  phone: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  email: string;

  @ApiProperty()
  @ApiPropertyOptional({
    type: String,
  })
  country: string;
}
