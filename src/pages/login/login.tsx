import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { emailRegex } from "../../utils/appRegex";

type LoginForm = {
	login: string,
	password: string,
}

export function Login(): ReactElement {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>()
	const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data)

	return (
		<div>
			<p>Pagina de Login</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("login", {
					required: true,
					pattern: emailRegex
				})} />
				{errors.login ? <p>Login inválido</p> : null}
				<input {...register("password", { required: true })} />
				{errors.password ? <p>A senha é obrigatória</p> : null}
				<input type="submit" />
			</form>
		</div>
	)
}