export interface EditTodoRequestDTO {
  id: string;
  completed?: boolean;
  description: string;
  categoryId?: string;
}
