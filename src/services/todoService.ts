import { Todo } from "../data/models/todo";
import { TodoRepository } from "../data/repositories/todoRepository";
import { CreateTodoRequestDTO } from "../dtos/request/todos/createTodoRequestDTO";
import { EditTodoRequestDTO } from "../dtos/request/todos/editTodoRequestDTO";
import { ListTodosResponseDTO } from "../dtos/response/todos/listTodosResponseDTO";

import { TodoMaper } from "../mappers/todoMapper";

export class TodoService {
  todoRepository: TodoRepository = new TodoRepository();

  async ListTodos(userId: string): Promise<ListTodosResponseDTO> {
    let todos: Todo[] = await this.todoRepository.GetTodoList(userId);
    return { todos };
  }

  async AddTodo(createTodoRequestDTO: CreateTodoRequestDTO): Promise<void> {
    let todo: Todo = TodoMaper.mapTodo(createTodoRequestDTO);

    await this.todoRepository.AddTodo(todo);
  }

  async UpdateTodo(editTodoRequestDTO: EditTodoRequestDTO): Promise<void> {
    let todo = await this.todoRepository.GetTodoById(editTodoRequestDTO.id);

    if (todo == undefined) throw "Tarefa não encontrada";

    todo.description = editTodoRequestDTO.description;
    todo.completed = editTodoRequestDTO.completed;

    await this.todoRepository.UpdateTodo(todo);
  }

  async DeleteTodo(id: string): Promise<void> {
    await this.todoRepository.DeleteTodo(id);
  }
}
