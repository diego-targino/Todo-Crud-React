import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequestDTO } from "../../../dtos/request/users/loginRequestDTO";
import { LoginResponseDTO } from "../../../dtos/response/users/loginResponseDTO";

export const loginAction = createAsyncThunk(
	'users/login',
	async (loginRequestDTO: LoginRequestDTO, thunkAPI): Promise<LoginResponseDTO | undefined> => {
		try {
			return undefined;
		}
		catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
		}
	});