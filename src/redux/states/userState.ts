import { LoginResponseDTO } from "../../dtos/response/users/loginResponseDTO";

export interface UserState {
	user: LoginResponseDTO | undefined,
	loading: boolean,
	error?: string,
	successRegister?: boolean,
	successLogin?: boolean,
}