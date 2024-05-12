import { IResponse } from "../iResponse";
import { TodoResponseDTO } from "./todoResponseDTO";

export interface ListTodosResponseDTO extends IResponse {
  todos: TodoResponseDTO[];
}
