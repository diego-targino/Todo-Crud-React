import { CategoryResponseDTO } from "../categories/categoryResponseDTO";
import { IResponse } from "../iResponse";
import { TagResponseDTO } from "../tags/tagResponseDTO";

export interface TodoResponseDTO {
  id: string;
  description: string;
  completed: boolean;
  category?: CategoryResponseDTO;
  tags?: TagResponseDTO[];
}
