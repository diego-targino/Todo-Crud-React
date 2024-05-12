import { IResponse } from "../iResponse";
import { CategoryResponseDTO } from "./categoryResponseDTO";

export interface ListCategoriesResponseDTO extends IResponse {
  categories: CategoryResponseDTO[];
}
