import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequestDTO } from "../../../dtos/request/users/loginRequestDTO";
import { LoginResponseDTO } from "../../../dtos/response/users/loginResponseDTO";
import { UserService } from "../../../services/userService";
import { UserValidator } from "../../../validators/userValidator";

export const loginAction = createAsyncThunk(
  "users/login",
  async (
    loginRequestDTO: LoginRequestDTO,
    thunkAPI
  ): Promise<LoginResponseDTO | undefined> => {
    try {
      UserValidator.loginValidator(loginRequestDTO);
      let loginResponseDTO = await new UserService().Login(loginRequestDTO);
      return loginResponseDTO;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
