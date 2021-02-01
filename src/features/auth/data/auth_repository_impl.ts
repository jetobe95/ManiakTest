import {AxiosInstance} from 'axios';
import {Either} from '../../../core/either';
import Failure, {ServerFailure} from '../../../core/failure';
import httpClient from '../../../core/httpClient';
import AuthRepository from '../domain/auth_repository';

export default class AuthRepositoryImpl implements AuthRepository {
  constructor(private client: AxiosInstance = httpClient) {}

  login = async (
    email: string,
    password: string,
  ): Promise<Either<Failure, string>> => {
    try {
      const {data} = await this.client.post('/login', {
        username: email,
        password,
      });
      if (data.token) {
        return Either.right(data.token);
      } else {
        return Either.left(new ServerFailure('Unauthorized'));
      }
    } catch (error) {
      return Either.left(new ServerFailure('Unauthorized'));
    }
  };
}
