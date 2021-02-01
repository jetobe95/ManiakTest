import {Either} from '../../../core/either';
import Failure from '../../../core/failure';
import Post from './post';

export default interface PostRepository {
  getPosts(): Promise<Either<Failure, Post[]>>;
}
