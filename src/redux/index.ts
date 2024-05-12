import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducers/todoReducer";
import { userSlice } from "./reducers/userReducer";

export const storeState = configureStore({
  reducer: {
    user: userSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof storeState.getState>;
