import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterUserRequestDTO } from "../../../dtos/request/users/registerUserRequestDTO";
import { UserService } from "../../../services/userService";

export const registerUserAction = createAsyncThunk(
  "users/register",
  async (
    registerUserRequestDTO: RegisterUserRequestDTO,
    thunkAPI
  ): Promise<void> => {
    try {
      await new UserService().createUser(registerUserRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
