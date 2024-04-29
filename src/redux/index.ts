import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

export const storeState = configureStore({
	reducer: {
		user: userReducer,
		todo: todoReducer
	}
})

export type RootState = ReturnType<typeof storeState.getState>;