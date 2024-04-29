import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterUserRequestDTO } from "../../../dtos/request/users/registerUserRequestDTO";

export const registerUserAction = createAsyncThunk(
	'users/register',
	async (registerUserRequestDTO: RegisterUserRequestDTO, thunkAPI): Promise<void> => {
		try {

		}
		catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
		}
	});