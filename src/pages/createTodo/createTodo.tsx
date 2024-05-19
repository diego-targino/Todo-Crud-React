import { ReactElement, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormField } from "../../components/formField/formField";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { createTodoAction } from "../../redux/actions/todos";
import { useNavigate } from "react-router-dom";

type CreateTodoForm = {
  description: string;
  tags?: string;
  categoryId?: string;
};
export function CreateTodo(): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState = useSelector((state: RootState) => state.user);
  const todoState = useSelector((state: RootState) => state.todo);
  const categoryState = useSelector((state: RootState) => state.category);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodoForm>();

  const onSubmit: SubmitHandler<CreateTodoForm> = (data: CreateTodoForm) => {
    dispatch(
      createTodoAction({
        ...data,
        userId: userState.user?.id!,
        tags: data.tags?.split(",").filter((x) => x !== ""),
      })
    );
  };

  useEffect(() => {
    if (todoState.successCreate) navigate("/app/home");
  }, [todoState]);

  return (
    <div className="container">
      <div className="form-container">
        <p className="title">Cadastrar tarefa</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            required
            type="text"
            label="Descrição:"
            fieldName="description"
            register={register}
            error={!!errors.description}
            errorMessage="A descrição é obrigatória"
          />
          <FormField
            type="text"
            label="Tags:"
            fieldName="tags"
            register={register}
            error={!!errors.tags}
            errorMessage="O e-mail é obrigatório"
          />
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <select {...field} id="mySelect">
                <option value="">Select...</option>
                {categoryState.categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="subimit-box">
            <input className="subimit-button" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
