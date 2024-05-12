export interface CreateTodoRequestDTO {
  userId: string;
  description: string;
  categoryId?: string;
}
