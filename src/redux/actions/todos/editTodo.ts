import { createAsyncThunk } from "@reduxjs/toolkit";
import { EditTodoRequestDTO } from "../../../dtos/request/todos/editTodoRequestDTO";
import { TodoValidator } from "../../../validators/todoValidator";
import { TodoService } from "../../../services/todoService";

export const editTodoAction = createAsyncThunk(
  "todos/update",
  async (editTodoRequestDTO: EditTodoRequestDTO, thunkAPI): Promise<void> => {
    try {
      TodoValidator.editTodoValidator(editTodoRequestDTO);

      await new TodoService().UpdateTodo(editTodoRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
