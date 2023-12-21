import {
  Controller,
  HttpCode,
  Patch,
  UsePipes,
  ValidationPipe,
  Body,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './user.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put('profile')
  async getNewTokens(@CurrentUser('id') id: number, @Body() dto: UserDto) {
    return this.userService.updateProfile(id, dto);
  }

  @HttpCode(200)
  @Auth()
  @Patch('profile/favorites/:productId')
  async toggleFavorite(
    @CurrentUser('id') id: number,
    @Param('productId') productId: number,
  ) {
    return this.userService.toggleFavorite(id, +productId);
  }
}
