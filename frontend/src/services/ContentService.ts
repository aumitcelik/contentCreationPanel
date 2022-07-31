import Content from '../models/content/Content';
import ContentQuery from '../models/content/ContentQuery';
import CreateContentRequest from '../models/content/CreateContentRequest';
import UpdateContentRequest from '../models/content/UpdateContentRequest';
import apiService from './ApiService';

class UserService {
  async save(createContentRequest: CreateContentRequest): Promise<void> {
    await apiService.post('/api/contents', createContentRequest);
  }

  async findAll(contentQuery: ContentQuery): Promise<Content[]> {
    return (
      await apiService.get<Content[]>('/api/contents', { params: contentQuery })
    ).data;
  }

  async findOne(id: string): Promise<Content> {
    return (await apiService.get<Content>(`/api/contents/${id}`)).data;
  }

  async update(
    id: string,
    updateContentRequest: UpdateContentRequest,
  ): Promise<void> {
    await apiService.put(`/api/contents/${id}`, updateContentRequest);
  }

  async delete(id: string): Promise<void> {
    await apiService.delete(`/api/contents/${id}`);
  }
}

export default new UserService();
