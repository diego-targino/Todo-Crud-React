import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListTodosResponseDTO } from "../../../dtos/response/todos/listTodosResponseDTO";

export const listTodosAction = createAsyncThunk(
	'todos/list',
	async (userId: string, thunkAPI): Promise<ListTodosResponseDTO | undefined> => {
		try {
			
			return undefined;
		}
		catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
		}
	});