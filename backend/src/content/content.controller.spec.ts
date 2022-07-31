import { Test, TestingModule } from '@nestjs/testing';

import { ContentController } from './content.controller';
import { CreateContentDto, UpdateContentDto } from './content.dto';
import { ContentService } from './content.service';

const ContentMockService = {
  save: jest.fn().mockImplementation((createContentDto: CreateContentDto) => {
    return {
      id: 'testid',
      dateCreated: new Date(),
      ...createContentDto,
    };
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [
      {
        id: 'testid1',
        name: 'test1',
        description: 'test1',
        dateCreated: new Date(),
      },
      {
        id: 'testid2',
        name: 'test2',
        description: 'test2',
        dateCreated: new Date(),
      },
      {
        id: 'testid3',
        name: 'test3',
        description: 'test3',
        dateCreated: new Date(),
      },
    ];
  }),
  findById: jest.fn().mockImplementation((id: string) => {
    return {
      id,
      name: 'test',
      description: 'test',
      dateCreated: new Date(),
    };
  }),
  update: jest
    .fn()
    .mockImplementation((id: string, updateContentDto: UpdateContentDto) => {
      return {
        id,
        ...updateContentDto,
      };
    }),
  delete: jest.fn().mockImplementation((id) => id),
};



describe('ContentController', () => {
  let controller: ContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentController],
      providers: [
        {
          provide: ContentService,
          useValue: ContentMockService,
        },
      
      ],
    }).compile();

    controller = module.get<ContentController>(ContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('saveContent', () => {
    it('should get the created content ', async () => {
      const created = await controller.save({
        name: 'test',
        description: 'test',
      });
      expect(created.id).toBe('testid');
      expect(created.name).toBe('test');
      expect(created.description).toBe('test');
    });
  });

  describe('findAllContents', () => {
    it('should get the array of coontents ', async () => {
      const contents = await controller.findAll({});
      expect(contents[0].id).toBe('testid1');
      expect(contents[1].name).toBe('test2');
      expect(contents[2].description).toBe('test3');
    });
  });

  describe('findCoontentById', () => {
    it('should get the coontent with matching id ', async () => {
      const spy = jest.spyOn(global, 'Date');
      const content = await controller.findOne('testid');
      const date = spy.mock.instances[0];

      expect(content).toEqual({
        id: 'testid',
        name: 'test',
        description: 'test',
        dateCreated: date,
      });
    });
  });

  describe('updateContent', () => {
    it('should update a content and return changed values', async () => {
      const updatedContent = await controller.update('testid', {
        name: 'test',
        description: 'test',
      });

      expect(updatedContent).toEqual({
        id: 'testid',
        name: 'test',
        description: 'test',
      });

      const updatedContent2 = await controller.update('testid2', {
        name: 'test2',
      });

      expect(updatedContent2).toEqual({
        id: 'testid2',
        name: 'test2',
      });
    });
  });

  describe('deleteContent', () => {
    it('should delete a content and return the id', async () => {
      const id = await controller.delete('testid');
      expect(id).toBe('testid');
    });
  });
});
