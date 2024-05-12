import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTodoRequestDTO } from "../../../dtos/request/todos/createTodoRequestDTO";
import { TodoService } from "../../../services/todoService";

export const createTodoAction = createAsyncThunk(
  "todos/create",
  async (
    createTodoRequestDTO: CreateTodoRequestDTO,
    thunkAPI
  ): Promise<void> => {
    try {
      await new TodoService().createTodo(createTodoRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
