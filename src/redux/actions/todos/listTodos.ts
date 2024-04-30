import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListTodosResponseDTO } from "../../../dtos/response/todos/listTodosResponseDTO";
import { TodoService } from "../../../services/todoService";

export const listTodosAction = createAsyncThunk(
  "todos/list",
  async (
    userId: string,
    thunkAPI
  ): Promise<ListTodosResponseDTO | undefined> => {
    try {
      let listTodosResponseDTO = await new TodoService().ListTodos(userId);
      return listTodosResponseDTO;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
