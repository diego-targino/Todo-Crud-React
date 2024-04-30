import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterUserRequestDTO } from "../../../dtos/request/users/registerUserRequestDTO";
import { UserValidator } from "../../../validators/userValidator";
import { UserService } from "../../../services/userService";

export const registerUserAction = createAsyncThunk(
  "users/register",
  async (
    registerUserRequestDTO: RegisterUserRequestDTO,
    thunkAPI
  ): Promise<void> => {
    try {
      UserValidator.createuserValidator(registerUserRequestDTO);
      await new UserService().CreateUser(registerUserRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
