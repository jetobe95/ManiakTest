import {Either} from '../../../core/either';
import Failure from '../../../core/failure';

export default interface AuthRepository {
  login(email: string, password: string): Promise<Either<Failure, string>>;
}
