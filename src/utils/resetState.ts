import { CategoryState } from "../redux/states/categoryState";
import { TodoState } from "../redux/states/todoState";

export const resetTodoState = (todoState: TodoState) => {
  todoState.successEdit = undefined;
  todoState.successCreate = undefined;
  todoState.successDelete = undefined;
  return todoState;
};

export const resetCategoryState = (categoryState: CategoryState) => {
  categoryState.successEdit = undefined;
  categoryState.successCreate = undefined;
  categoryState.successDelete = undefined;
  return categoryState;
};
