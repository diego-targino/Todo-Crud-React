import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListTodosResponseDTO } from "../../../dtos/response/todos/listTodosResponseDTO";
import { TodoService } from "../../../services/todoService";
import { ListTodosrequestDTO } from "../../../dtos/response/todos/listTodosRequestDTO";

export const listTodosAction = createAsyncThunk(
  "todos/list",
  async (
    listTodosrequestDTO: ListTodosrequestDTO,
    thunkAPI
  ): Promise<ListTodosResponseDTO | undefined> => {
    try {
      let listTodosResponseDTO = await new TodoService().listTodos(
        listTodosrequestDTO
      );
      return listTodosResponseDTO;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
