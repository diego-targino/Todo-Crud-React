import { CreateTodoRequestDTO } from "../dtos/request/todos/createTodoRequestDTO";
import { EditTodoRequestDTO } from "../dtos/request/todos/editTodoRequestDTO";

export class TodoValidator {
  static createTodoValidator(createTodoRequestDTO: CreateTodoRequestDTO): void {
    if (!createTodoRequestDTO.description)
      throw "A descrição da tarefa é obrigatória";

    if (!createTodoRequestDTO.userId)
      throw "A tarefa deve ser associada a um usuário";
  }

  static editTodoValidator(editTodoRequestDTO: EditTodoRequestDTO): void {
    if (!editTodoRequestDTO.id) throw "É necessário informar o id da tarefa";
    if (!editTodoRequestDTO.description) throw "Valor de descrição inválido";
  }
}
