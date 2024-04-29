import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTodoRequestDTO } from "../../../dtos/request/todos/createTodoRequestDTO";

export const createTodoAction = createAsyncThunk(
	'todos/create',
	async (createTodoRequestDTO: CreateTodoRequestDTO, thunkAPI): Promise<void> => {
		try {

		}
		catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
		}
	});