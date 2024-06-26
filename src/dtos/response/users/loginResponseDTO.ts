import { IResponse } from "../iResponse";

export interface LoginResponseDTO extends IResponse {
  name: string;
  email: string;
  id: string;
}
