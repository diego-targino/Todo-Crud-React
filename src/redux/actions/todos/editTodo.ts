import { createAsyncThunk } from "@reduxjs/toolkit";
import { EditTodoRequestDTO } from "../../../dtos/request/todos/editTodoRequestDTO";
import { TodoService } from "../../../services/todoService";

export const editTodoAction = createAsyncThunk(
  "todos/update",
  async (editTodoRequestDTO: EditTodoRequestDTO, thunkAPI): Promise<void> => {
    try {
      await new TodoService().editTodo(editTodoRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
