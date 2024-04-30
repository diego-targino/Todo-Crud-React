import { User } from "../data/models/user";
import { UserRepository } from "../data/repositories/userRepository";
import { LoginRequestDTO } from "../dtos/request/users/loginRequestDTO";
import { RegisterUserRequestDTO } from "../dtos/request/users/registerUserRequestDTO";
import { LoginResponseDTO } from "../dtos/response/users/loginResponseDTO";
import { UserMapper } from "../mappers/userMapper";
import { EncriptStringSha512 } from "../utils/criptografer";

export class UserService {
  userRepository = new UserRepository();

  async Login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
    let encriptedPassword = EncriptStringSha512(loginRequestDTO.password);
    let user = await this.userRepository.GetUserByEmail(loginRequestDTO.login);

    if (user == undefined || user.password !== encriptedPassword)
      throw "O login ou senha inválida";

    return {
      id: user._id?.toString()!,
      email: user.email,
      name: user.name,
    };
  }

  async CreateUser(
    registerUserRequestDTO: RegisterUserRequestDTO
  ): Promise<void> {
    let encriptedPassword = EncriptStringSha512(
      registerUserRequestDTO.password
    );

    let user: User = UserMapper.mapUser({
      ...registerUserRequestDTO,
      password: encriptedPassword,
    });

    await this.userRepository.AddUser(user);
  }
}
