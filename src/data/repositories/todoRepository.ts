import { Collection, ObjectId, Document } from "mongodb";
import { Todo } from "../models/todo";
import { GetCollection } from "../mongoConfiguration/mongoConfiguration";

export class TodoRepository {
  async GetTodoList(userId: string): Promise<Todo[]> {
    const todoCollection = await GetCollection("todos");
    const todos = await todoCollection
      .find({ userId: new ObjectId(userId) })
      .toArray();

    return todos.map(
      (todo) =>
        new Todo(todo.description, todo.completed, todo.userId, todo._id)
    );
  }

  async GetTodoById(id?: string): Promise<Todo | undefined> {
    const todoCollection: Collection<Document> = await GetCollection("todos");

    const todo = await todoCollection.findOne({ _id: new ObjectId(id) });

    if (todo)
      return new Todo(todo.description, todo.completed, todo.userId, todo._id);
  }

  async AddTodo(todo: Todo): Promise<void> {
    const todoCollection = await GetCollection("todos");
    await todoCollection.insertOne(todo);
  }

  async UpdateTodo(todo: Todo): Promise<void> {
    const todoCollection = await GetCollection("todos");

    let query = { _id: todo._id };

    let result = await todoCollection.updateOne(query, { $set: todo });

    if (result.matchedCount === 0) throw "Todo não encontrado";
  }

  async DeleteTodo(todoId: string): Promise<void> {
    const todoCollection = await GetCollection("todos");

    let query = { _id: new ObjectId(todoId) };

    let result = await todoCollection.deleteOne(query);

    if (result.deletedCount === 0) throw "Todo não encontrado";
  }
}
