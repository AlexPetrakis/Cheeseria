import ApplicationError from "./ApplicationError";

class ValidationError extends ApplicationError {
  constructor(errors?: string[]) {
    super(
      "ValidationError",
      "ValidationError - invalid data provided",
      400,
      errors || []
    );
  }
}
export default ValidationError;
