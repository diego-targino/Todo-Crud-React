import { ReactElement, useEffect } from "react";
import { emailRegex } from "../../utils/appRegex";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormField } from "../../components/formField/formField";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import { registerUserAction } from "../../redux/actions/users";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Register(): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState = useSelector((state: RootState) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
    dispatch(registerUserAction({ ...data }));
  };

  useEffect(() => {
    if (userState.successRegister) navigate("/");
  }, [userState]);

  return (
    <div className="container">
      <div className="form-container">
        <p className="title">Faça seu cadastro</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            required
            type="text"
            label="Nome"
            fieldName="name"
            register={register}
            error={!!errors.name}
            errorMessage="O nome é obrigatório"
          />
          <FormField
            required
            type="text"
            label="E-mail"
            fieldName="email"
            patther={emailRegex}
            register={register}
            error={!!errors.email}
            errorMessage="O e-mail é obrigatório"
          />
          <FormField
            required
            label="Senha"
            type="password"
            fieldName="password"
            register={register}
            error={!!errors.password}
            errorMessage="A senha é obrigatória"
          />
          <FormField
            required
            label="Confirmação da senha"
            type="text"
            fieldName="confirmPassword"
            register={register}
            error={!!errors.confirmPassword}
            errorMessage="As senhas informadas não coincidem"
          />
          <div className="subimit-box">
            <input className="subimit-button" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
