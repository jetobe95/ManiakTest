export default class Failure {
  constructor(public message: string) {}
}

export class ServerFailure extends Failure {
  constructor(message:string) {
    super(message);
  }
}
