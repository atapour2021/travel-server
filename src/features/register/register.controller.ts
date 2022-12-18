import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRegisterDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@ApiTags('Register')
@Controller('Register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  public async create(@Body() register: CreateRegisterDto) {
    return this.registerService.insert(register);
  }
}
