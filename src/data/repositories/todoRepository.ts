import { ObjectId } from "mongodb";
import { Todo } from '../models/todo';
import { GetCollecton } from '../mongoConfiguration/mongoConfiguration';

export async function GetTodoList(userId: string): Promise<Todo[]> {
	const todoCollection = await GetCollecton('todos');
	const todos = await todoCollection.find({ userId: new ObjectId(userId) }).toArray();

	return todos.map(todo => new Todo(
		todo.description,
		todo.completed,
		todo.userId,
		todo._id));
}

export async function AddTodo(todo: Todo): Promise<void> {
	const todoCollection = await GetCollecton('todos');
	await todoCollection.insertOne(todo);
}

export async function UpdateTodo(todoId: string, todo: Todo): Promise<void> {
	const todoCollection = await GetCollecton('todos');

	let query = { _id: new ObjectId(todoId) };

	let result = await todoCollection.updateOne(query, { $set: todo });

	if (result.matchedCount === 0)
		throw ("Todo não encontrado");
}

export async function DleteTodo(todoId: string): Promise<void> {
	const todoCollection = await GetCollecton('todos');

	let query = { _id: new ObjectId(todoId) };

	let result = await todoCollection.deleteOne(query);

	if (result.deletedCount === 0)
		throw ("Todo não encontrado");
}

