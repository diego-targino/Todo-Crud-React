import { ReactElement } from "react";
import { CategoryResponseDTO } from "../../dtos/response/categories/categoryResponseDTO";
import { useAppDispatch } from "../../redux";
import { deleteCategoryAction } from "../../redux/actions/categories";

interface CategoryItemProps {
  category: CategoryResponseDTO;
}
export function CategoryItem({
  category,
}: CategoryItemProps): ReactElement<CategoryItemProps> {
  const dispatch = useAppDispatch();

  const onDeleteCategory = () => {
    dispatch(deleteCategoryAction(category.id));
  };

  return (
    <div className="todo-item">
      <div className="description-box">
        <div
          className="color-box"
          style={{ backgroundColor: category?.color ?? "#FE6D6A" }}
        ></div>
        <p>{category.name}</p>
      </div>
      <div className="item-buttons">
        <button
          className="remove-button"
          onClick={() => {
            onDeleteCategory();
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
