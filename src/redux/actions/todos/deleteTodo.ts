import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTodoAction = createAsyncThunk(
	'todos/delete',
	async (id: string, thunkAPI): Promise<void> => {
		try {

		}
		catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
		}
	});