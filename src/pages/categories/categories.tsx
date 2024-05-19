import { SubmitHandler, useForm } from "react-hook-form";
import "./categories.style.css";
import { ReactElement, useEffect } from "react";
import { FormField } from "../../components/formField/formField";
import { colorRegex } from "../../utils/appRegex";
import { RootState, useAppDispatch } from "../../redux";
import {
  createCategoryAction,
  deleteCategoryAction,
  listCategoriesAction,
} from "../../redux/actions/categories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CategoryItem } from "../../components/categoryItem/categoryItem";

type CreateCategoryForm = {
  color: string;
  name: string;
};

export function Categories(): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState = useSelector((state: RootState) => state.user);
  const categoryState = useSelector((state: RootState) => state.category);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryForm>({
    defaultValues: {
      color: "#FE6D6A",
    },
  });

  const onSubmit: SubmitHandler<CreateCategoryForm> = (
    data: CreateCategoryForm
  ) => {
    dispatch(
      createCategoryAction({
        ...data,
        userId: userState.user?.id || "",
      })
    );
  };

  useEffect(() => {
    if (userState.user?.id) dispatch(listCategoriesAction(userState.user?.id));
  }, []);

  useEffect(() => {
    if (
      userState.user?.id &&
      (!!categoryState.successCreate ||
        !!categoryState.successEdit ||
        !!categoryState.successDelete)
    ) {
      dispatch(listCategoriesAction(userState.user?.id));
    }
  }, [categoryState]);

  return (
    <div className="container">
      <div className="page-content">
        <div className="action-box">
          <div>
            <form className="category-form" onSubmit={handleSubmit(onSubmit)}>
              <FormField
                required
                label="Cor:"
                fieldName="color"
                type="color"
                register={register}
                error={!!errors.color}
                errorMessage="Cor inválida"
                patther={colorRegex}
              />
              <FormField
                required
                label="Nome:"
                fieldName="name"
                type="text"
                register={register}
                error={!!errors.name}
                errorMessage="Nome inválido"
              />
              <input
                className="add-category"
                type="submit"
                value="Add categoria"
              />
            </form>
          </div>

          <button
            className="manage-categories"
            onClick={() => navigate("/app/home")}
          >
            Gerenciar tarefas
          </button>
        </div>
        <div className="list-box">
          {categoryState.categories.map((category) => (
            <CategoryItem category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
