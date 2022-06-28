type Response = {
  name: string;
  message: string;
  status: number;
  errors: string[];
};

class ApplicationError extends Error {
  status: number;
  errors: string[];
  response: Response;
  constructor(
    errorType: string,
    message: string,
    status: number,
    errors: string[]
  ) {
    super();
    this.name = this.constructor.name;
    this.status = status || 500;
    this.message = message || "Something went wrong. Please try again.";
    this.errors = errors;
    this.response = {
      name: errorType,
      message: this.message,
      status: this.status,
      errors: this.errors,
    };
  }
}
export default ApplicationError;
