import { LoginRequestDTO } from "../dtos/request/users/loginRequestDTO";
import { RegisterUserRequestDTO } from "../dtos/request/users/registerUserRequestDTO";
import { IResponse } from "../dtos/response/iResponse";
import { LoginResponseDTO } from "../dtos/response/users/loginResponseDTO";
import { AxiosClient } from "../utils/axiosClient";

export class UserService {
  async login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
    const response = await AxiosClient.put<LoginResponseDTO>(
      "/users",
      loginRequestDTO
    );

    if (response.status !== 200) throw new Error(response.data.message);

    return response.data;
  }

  async createUser(
    registerUserRequestDTO: RegisterUserRequestDTO
  ): Promise<void> {
    const response = await AxiosClient.post<IResponse>(
      "/users",
      registerUserRequestDTO
    );

    if (response.status !== 201) throw new Error(response.data.message);
  }
}
