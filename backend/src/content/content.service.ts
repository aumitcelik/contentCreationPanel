
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';

import { CreateContentDto, UpdateContentDto } from './content.dto';
import { Content } from './content.entity';
import { ContentQuery } from './content.query';

@Injectable()
export class ContentService {
  async save(createContentDto: CreateContentDto): Promise<Content> {
    return await Content.create({
      ...createContentDto,
      dateCreated: new Date(),
    }).save();
  }

  async findAll(contentQuery: ContentQuery): Promise<Content[]> {
    Object.keys(contentQuery).forEach((key) => {
      contentQuery[key] = ILike(`%${contentQuery[key]}%`);
    });
    return await Content.find({
      where: contentQuery,
      order: {
        name: 'ASC',
        description: 'ASC',
      },
    });
  }

  async findById(id: string): Promise<Content> {
    const content = await Content.findOne(id);
    if (!content) {
      throw new HttpException(
        `Could not find content with matching id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return content;
  }

  async update(id: string, updateContentDto: UpdateContentDto): Promise<Content> {
    const content = await this.findById(id);
    return await Content.create({ id: content.id, ...updateContentDto }).save();
  }

  async delete(id: string): Promise<string> {
    const content = await this.findById(id);
    await Content.delete(content);
    return id;
  }

  async count(): Promise<number> {
    return await Content.count();
  }
}