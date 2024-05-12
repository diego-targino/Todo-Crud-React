import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducers/todoReducer";
import { userSlice } from "./reducers/userReducer";
import { useDispatch } from "react-redux";

export const storeState = configureStore({
  reducer: {
    user: userSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export type AppDispatch = typeof storeState.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof storeState.getState>;
