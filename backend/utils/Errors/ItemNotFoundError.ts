import ApplicationError from "./ApplicationError";

class ItemNotFoundError extends ApplicationError {
  constructor() {
    super("ItemNotFoundError", "Item not found with provided ID", 404, []);
  }
}
export default ItemNotFoundError;
