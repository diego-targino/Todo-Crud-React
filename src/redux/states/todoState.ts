import { Todo } from "../../data/models/todo";

export interface TodoState {
	todos: Todo[];
	loading: boolean;
	error?: string;
	successEdit?: boolean;
	successDelete?: boolean;
	successCreate?: boolean;
}