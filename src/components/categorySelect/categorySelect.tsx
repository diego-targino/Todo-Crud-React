import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import "./categorySelect.style.css";
import { ReactElement, useEffect } from "react";
import { listCategoriesAction } from "../../redux/actions/categories";

interface CategorySelectProps {
  onchange: Function;
}

export function CategorySelect(
  props: CategorySelectProps
): ReactElement<CategorySelectProps> {
  const dispatch = useAppDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const categoryState = useSelector((state: RootState) => state.category);

  const onChangeSelect = (id?: string) => {
    if (categoryState.categories.find((x) => x.id === id)) props.onchange(id);
  };

  useEffect(() => {
    if (!categoryState.loading)
      dispatch(listCategoriesAction(userState.user?.id || ""));
  }, []);

  return (
    <div className="category-box">
      <label>Categoria:</label>
      <select
        disabled={categoryState.categories.length === 0}
        onChange={(event) => onChangeSelect(event.target.value)}
      >
        <option>Selecione</option>
        {categoryState.categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
