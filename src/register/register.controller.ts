import {
    Body,
    Controller,
    Post
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@ApiTags('User')
@Controller('user')
export class RegisterController {
    constructor(private readonly userService: RegisterService) { }

    @Post()
    public async create(@Body() user: CreateUserDto) {
        return this.userService.insert(user);
    }
}