import { createAsyncThunk } from "@reduxjs/toolkit";
import { EditTodoRequestDTO } from "../../../dtos/request/todos/editTodoRequestDTO";

export const editTodoAction = createAsyncThunk(
	'todos/update',
	async (editTodoRequestDTO: EditTodoRequestDTO, thunkAPI): Promise<void> => {
		try {

		}
		catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
		}
	});