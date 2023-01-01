import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { CreateRegisterDto, RegisterFilterDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@ApiTags('Register')
@Controller('Register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }
  @Get()
  @ApiQuery({
    name: 'fullName',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'phone',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'email',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'from',
    required: false,
    type: Date,
  })
  @ApiQuery({
    name: 'to',
    required: false,
    type: Date,
  })
  @ApiQuery({
    name: 'isChecked',
    required: false,
    type: Boolean,
  })
  public async findByFilter(@Query() query: RegisterFilterDto) {
    return await this.registerService.findByFilter(query);
  }
  @Post()
  public async create(@Body() register: CreateRegisterDto) {
    console.log(register)
    return this.registerService.insert(register);
  }
}
