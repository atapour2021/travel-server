import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    readonly id: number;

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
        type: Number,
    })
    email: string;

    @ApiProperty()
    @ApiPropertyOptional({
        type: Number,
    })
    country: string;
}