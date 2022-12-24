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
import { CreateUserDto, UpdateUserDto, UserFilterDto } from './dto/user.dto';
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
  @ApiQuery({
    name: 'family',
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
  public async findByFilter(@Query() query: UserFilterDto) {
    return await this.userService.findByFilter(query);
  }

  @Get(':id')
  public async findById(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
  @Post()
  public async create(@Body() user: CreateUserDto) {
    return await this.userService.insert(user);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
