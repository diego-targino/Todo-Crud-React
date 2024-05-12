import { AxiosResponse, isAxiosError } from "axios";

export function mapErrorResponse(error: any): AxiosResponse<any> {
  if (isAxiosError(error)) {
    if (error.response?.data.message) return error.response;

    throw new Error("Houve um erro no sistema");
  }

  throw new Error(error.message);
}
