import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTodoRequestDTO } from "../../../dtos/request/todos/createTodoRequestDTO";
import { TodoValidator } from "../../../validators/todoValidator";
import { TodoService } from "../../../services/todoService";

export const createTodoAction = createAsyncThunk(
  "todos/create",
  async (
    createTodoRequestDTO: CreateTodoRequestDTO,
    thunkAPI
  ): Promise<void> => {
    try {
      TodoValidator.createTodoValidator(createTodoRequestDTO);
      await new TodoService().AddTodo(createTodoRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
