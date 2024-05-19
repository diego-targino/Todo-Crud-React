import axios from "axios";
import { CreateTodoRequestDTO } from "../dtos/request/todos/createTodoRequestDTO";
import { EditTodoRequestDTO } from "../dtos/request/todos/editTodoRequestDTO";
import { ListTodosResponseDTO } from "../dtos/response/todos/listTodosResponseDTO";
import { IResponse } from "../dtos/response/iResponse";
import { AxiosClient } from "../utils/axiosClient";
import { ListTodosrequestDTO } from "../dtos/response/todos/listTodosRequestDTO";

export class TodoService {
  async listTodos(
    listTodosrequestDTO: ListTodosrequestDTO
  ): Promise<ListTodosResponseDTO> {
    const response = await AxiosClient.get<ListTodosResponseDTO>("/todos", {
      headers: { ...listTodosrequestDTO },
    });

    if (response.status !== 200) throw new Error(response.data.message);

    return response.data;
  }

  async createTodo(createTodoRequestDTO: CreateTodoRequestDTO): Promise<void> {
    const response = await AxiosClient.post<IResponse>(
      "/todos",
      createTodoRequestDTO
    );

    if (response.status !== 201) throw new Error(response.data.message);
  }

  async editTodo(editTodoRequestDTO: EditTodoRequestDTO): Promise<void> {
    const response = await AxiosClient.put<IResponse>(
      `/todos/${editTodoRequestDTO.id}`,
      editTodoRequestDTO
    );

    if (response.status !== 200) throw new Error(response.data.message);
  }

  async deleteTodo(id: string): Promise<void> {
    const response = await AxiosClient.delete<IResponse>(`/todos/${id}`);

    if (response.status !== 200) throw new Error(response.data.message);
  }
}
