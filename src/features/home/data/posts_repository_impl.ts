import {AxiosInstance} from 'axios';
import {Either} from '../../../core/either';
import failure, {ServerFailure} from '../../../core/failure';
import httpClient from '../../../core/httpClient';
import Post from '../domain/post';
import post from '../domain/post';
import PostRepository from '../domain/post_repository';

export default class PostRepositoryImpl implements PostRepository {
  constructor(private client: AxiosInstance = httpClient) {}

  getPosts = async (): Promise<Either<failure, post[]>> => {
    try {
      const {data} = await this.client.get('/images');
      if (Array.isArray(data)) {
        return Either.right(data.map((item) => Post.fromJson(item)));
      } else {
        return Either.left(new ServerFailure('Can not get images'));
      }
    } catch (error) {
      return Either.left(new ServerFailure('Can not get images'));
    }
  };
}
