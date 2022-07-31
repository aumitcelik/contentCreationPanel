import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { CreateContentDto, UpdateContentDto } from './content.dto';
import { Content } from './content.entity';
import { ContentQuery } from './content.query';
import { ContentService } from './content.service';

@Controller('contents')
@ApiBearerAuth()
@UseGuards(JwtGuard, RolesGuard)
@ApiTags('Contents')
export class ContentController {
  constructor(
    private readonly contentService: ContentService,
  ) {}

  @Post()
  @Roles(Role.Admin, Role.Editor)
  async save(@Body() createContentDto: CreateContentDto): Promise<Content> {
    return await this.contentService.save(createContentDto);
  }

  @Get()
  async findAll(@Query() contentQuery: ContentQuery): Promise<Content[]> {
    return await this.contentService.findAll(contentQuery);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<Content> {
    return await this.contentService.findById(id);
  }

  @Put('/:id')
  @Roles(Role.Admin, Role.Editor)
  async update(
    @Param('id') id: string,
    @Body() updateContentDto: UpdateContentDto,
  ): Promise<Content> {
    return await this.contentService.update(id, updateContentDto);
  }

  @Delete('/:id')
  @Roles(Role.Admin)
  async delete(@Param('id') id: string): Promise<string> {
    return await this.contentService.delete(id);
  }

  
}
