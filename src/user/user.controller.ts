import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: number) {
    return this.userService.findById(id);
  }
  @Post()
  public async create(@Body() user: CreateUserDto) {
    return this.userService.insert(user);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
