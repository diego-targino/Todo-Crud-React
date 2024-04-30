import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoService } from "../../../services/todoService";

export const deleteTodoAction = createAsyncThunk(
  "todos/delete",
  async (id: string, thunkAPI): Promise<void> => {
    try {
      await new TodoService().DeleteTodo(id);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
