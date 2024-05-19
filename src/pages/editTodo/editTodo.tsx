import { ReactElement, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FormField } from "../../components/formField/formField";
import { RootState, useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import { TodoResponseDTO } from "../../dtos/response/todos/todoResponseDTO";
import { editTodoAction } from "../../redux/actions/todos";

type EditTodoForm = {
  description: string;
  categoryId?: string;
};

export function EditTodo(): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState = useSelector((state: RootState) => state.user);
  const todoState = useSelector((state: RootState) => state.todo);
  const categoryState = useSelector((state: RootState) => state.category);

  const { state } = useLocation();

  const todo: TodoResponseDTO = state;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodoForm>({
    defaultValues: {
      description: todo.description,
      categoryId: todo.category?.id,
    },
  });

  const onSubmit: SubmitHandler<EditTodoForm> = (data: EditTodoForm) => {
    dispatch(editTodoAction({ ...data, id: todo.id }));
  };

  useEffect(() => {
    if (todoState.successEdit) navigate("/app/home");
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
          <Controller
            name="categoryId"
            control={control}
            defaultValue={todo.category?.id}
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
