import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailRegex } from "../../utils/appRegex";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { loginAction } from "../../redux/actions/users";

type LoginForm = {
  login: string;
  password: string;
};

export function Login(): ReactElement {
  const dispatch = useAppDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
    const result = dispatch(loginAction({ ...data }));

    console.log(result);
  };
  return (
    <div>
      <p>Pagina de Login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("login", {
            required: true,
            pattern: emailRegex,
          })}
        />
        {errors.login ? <p>Login inválido</p> : null}
        <input {...register("password", { required: true })} />
        {errors.password ? <p>A senha é obrigatória</p> : null}
        <input type="submit" />
      </form>
    </div>
  );
}
