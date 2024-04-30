import { ObjectId } from "mongodb";
import { Todo } from "../data/models/todo";

export class TodoMaper {
  static mapTodo(object: any): Todo {
    return new Todo(
      object.description,
      object.completed,
      object.userId,
      object.id
    );
  }
}
