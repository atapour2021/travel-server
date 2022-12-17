import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@ApiTags('Register')
@Controller('Register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  public async create(@Body() user: CreateUserDto) {
    return this.registerService.insert(user);
  }
}
