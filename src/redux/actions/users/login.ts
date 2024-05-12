import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequestDTO } from "../../../dtos/request/users/loginRequestDTO";
import { LoginResponseDTO } from "../../../dtos/response/users/loginResponseDTO";
import { UserService } from "../../../services/userService";

export const loginAction = createAsyncThunk(
  "users/login",
  async (
    loginRequestDTO: LoginRequestDTO,
    thunkAPI
  ): Promise<LoginResponseDTO | undefined> => {
    try {
      let loginResponseDTO = await new UserService().login(loginRequestDTO);
      return loginResponseDTO;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
