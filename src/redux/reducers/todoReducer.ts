import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../states/todoState";
import {
  createTodoAction,
  deleteTodoAction,
  editTodoAction,
  listTodosAction,
} from "../actions/todos";
import { resetTodoState } from "../../utils/resetState";

const initialTodoState: TodoState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listTodosAction.pending, (state) => {
        state = resetTodoState(state);
        state.loading = true;
        state.todos = [];
      })
      .addCase(listTodosAction.fulfilled, (state, action) => {
        state = resetTodoState(state);
        state.loading = false;
        state.todos = action.payload?.todos || [];
      })
      .addCase(listTodosAction.rejected, (state, action) => {
        state = resetTodoState(state);
        state.loading = false;
        state.error =
          (action.payload as string) || "houve um erro ao listar as tarefas";
      });

    builder
      .addCase(createTodoAction.pending, (state) => {
        state = resetTodoState(state);
        state.loading = true;
        state.successCreate = undefined;
      })
      .addCase(createTodoAction.fulfilled, (state) => {
        state = resetTodoState(state);
        state.loading = false;
        state.successCreate = true;
      })
      .addCase(createTodoAction.rejected, (state, action) => {
        state = resetTodoState(state);
        state.loading = false;
        state.successCreate = false;
        state.error =
          (action.payload as string) || "houve um erro ao criar tarefa";
      });

    builder
      .addCase(editTodoAction.pending, (state) => {
        state = resetTodoState(state);
        state.loading = true;
        state.successEdit = undefined;
      })
      .addCase(editTodoAction.fulfilled, (state) => {
        state = resetTodoState(state);
        state.loading = false;
        state.successEdit = true;
      })
      .addCase(editTodoAction.rejected, (state, action) => {
        state = resetTodoState(state);
        state.loading = false;
        state.successEdit = false;
        state.error =
          (action.payload as string) || "houve um erro ao editar tarefa";
      });

    builder
      .addCase(deleteTodoAction.pending, (state) => {
        state = resetTodoState(state);
        state.loading = true;
        state = resetTodoState(state);
      })
      .addCase(deleteTodoAction.fulfilled, (state) => {
        state = resetTodoState(state);

        state.loading = false;
        state.successDelete = true;
      })
      .addCase(deleteTodoAction.rejected, (state, action) => {
        state = resetTodoState(state);
        state.loading = false;
        state.successDelete = false;
        state.error =
          (action.payload as string) || "houve um erro ao deletar tarefa";
      });

    builder.addDefaultCase((state, action) => {});
  },
});
