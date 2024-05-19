import { TodoResponseDTO } from "../../dtos/response/todos/todoResponseDTO";

export interface TodoState {
  todos: TodoResponseDTO[];
  loading: boolean;
  error?: string;
  successEdit?: boolean;
  successDelete?: boolean;
  successCreate?: boolean;
}
