import { IResponse } from "../iResponse";

export interface TodoResponseDTO extends IResponse {
  id: string;
  description: string;
  completed: boolean;
  categoryId?: string;
}
