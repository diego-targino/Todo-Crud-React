import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../states/userState";
import { loginAction, registerUserAction } from "../actions/users";

const initialUserState: UserState = {
  user: undefined,
  loading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.loading = true;
        state.successRegister = undefined;
      })
      .addCase(registerUserAction.fulfilled, (state) => {
        state.loading = false;
        state.successRegister = true;
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.loading = false;
        state.successRegister = false;
        state.error =
          action.error.message || "houve um erro ao registrar usuário";
      });

    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.successLogin = undefined;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.successLogin = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.successLogin = false;
        state.error =
          (action.payload as string) || "houve um erro ao logar usuário";
      });

    builder.addDefaultCase((state, action) => {});
  },
});
