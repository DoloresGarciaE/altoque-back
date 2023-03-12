
export class responseError extends Error {
  code: string;
  constructor({ message, code }) {
    super(message);
    this.code = code;
  }
}