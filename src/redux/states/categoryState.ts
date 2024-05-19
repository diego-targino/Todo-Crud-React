import { CategoryResponseDTO } from "../../dtos/response/categories/categoryResponseDTO";

export interface CategoryState {
  categories: CategoryResponseDTO[];
  loading: boolean;
  error?: string;
  successEdit?: boolean;
  successDelete?: boolean;
  successCreate?: boolean;
}
