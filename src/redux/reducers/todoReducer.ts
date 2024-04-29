import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../states/todoState";
import {
	createTodoAction,
	deleteTodoAction,
	editTodoAction,
	listTodosAction
} from "../actions/todos";

const initialTodoState: TodoState = {
	todos: [],
	loading: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState: initialTodoState,
	reducers: {},
	extraReducers: (builder) => {

		builder
			.addCase(listTodosAction.pending, (state) => {
				state.loading = true;
				state.todos = [];
			})
			.addCase(listTodosAction.fulfilled, (state, action) => {
				state.loading = false,
					state.todos = action.payload?.todos || [];
			})
			.addCase(listTodosAction.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "houve um erro ao listar as tarefas";
			});


		builder
			.addCase(createTodoAction.pending, (state) => {
				state.loading = true;
				state.successCreate = undefined;
			})
			.addCase(createTodoAction.fulfilled, (state) => {
				state.loading = false;
				state.successCreate = true;
			})
			.addCase(createTodoAction.rejected, (state, action) => {
				state.loading = false;
				state.successCreate = false;
				state.error = action.error.message || "houve um erro ao criar tarefa";
			});

		builder
			.addCase(editTodoAction.pending, (state) => {
				state.loading = true;
				state.successEdit = undefined;
			})
			.addCase(editTodoAction.fulfilled, (state) => {
				state.loading = false;
				state.successEdit = true;
			})
			.addCase(editTodoAction.rejected, (state, action) => {
				state.loading = false;
				state.successEdit = false;
				state.error = action.error.message || "houve um erro ao editar tarefa";
			});

		builder
			.addCase(deleteTodoAction.pending, (state) => {
				state.loading = true;
				state.successDelete = undefined;
			})
			.addCase(deleteTodoAction.fulfilled, (state) => {
				state.loading = false;
				state.successDelete = true;
			})
			.addCase(deleteTodoAction.rejected, (state, action) => {
				state.loading = false;
				state.successDelete = false;
				state.error = action.error.message || "houve um erro ao deletar tarefa";
			});

		builder.addDefaultCase((state, action) => { });
	}
})

export default todoSlice.reducer;