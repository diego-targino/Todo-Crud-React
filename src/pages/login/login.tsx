import "./login.style.css";
import { ReactElement, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailRegex } from "../../utils/appRegex";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { loginAction } from "../../redux/actions/users";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "../../components/formField/formField";

type LoginForm = {
  login: string;
  password: string;
};

export function Login(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userState = useSelector((state: RootState) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  useEffect(() => {
    if (userState.successLogin) navigate("/app/home");
  }, [userState]);

  const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
    const result = dispatch(loginAction({ ...data }));
  };
  return (
    <div className="container">
      <div className="form-container">
        <p className="title">Faça o Login</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            required
            label="E-mail:"
            fieldName="login"
            type="text"
            register={register}
            error={!!errors.login}
            errorMessage="E-mail inválido"
            patther={emailRegex}
          />
          <FormField
            required
            label="Senha:"
            fieldName="password"
            type="password"
            register={register}
            error={!!errors.password}
            errorMessage="É obrigatório informar uma senha"
          />
          <div className="subimit-box">
            <input className="subimit-button" type="submit" />
          </div>
        </form>
        <Link
          style={{
            color: "#40c4ff",
            display: "flex",
            justifyContent: "center",
          }}
          to="/register"
        >
          Faça seu cadastro
        </Link>
      </div>
    </div>
  );
}
