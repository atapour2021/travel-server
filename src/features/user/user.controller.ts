import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
  })
  public async findByFilter(@Query() query: { name: string }) {
    return this.userService.findByFilter(query);
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
