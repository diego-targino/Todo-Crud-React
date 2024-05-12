import { IResponse } from "../iResponse";

export interface CategoryResponseDTO extends IResponse {
  name: string;
  color: string;
  id: string;
}
