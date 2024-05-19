import "./todoItem.style.css";
import { ReactElement, useEffect, useState } from "react";
import { TodoResponseDTO } from "../../dtos/response/todos/todoResponseDTO";
import { RootState, useAppDispatch } from "../../redux";
import { deleteTodoAction } from "../../redux/actions/todos";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface TodoItemProps {
  todo: TodoResponseDTO;
  listTodos: Function;
}

export function TodoItem({
  todo,
  listTodos,
}: TodoItemProps): ReactElement<TodoItemProps> {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const todoState = useSelector((state: RootState) => state.todo);
  const [checked, setChecked] = useState(todo.completed);

  const onDeleteTodo = () => {
    dispatch(deleteTodoAction(todo.id));
  };

  return (
    <div className="todo-item">
      <div className="description-box">
        <div
          className="color-box"
          style={{ backgroundColor: todo.category?.color ?? "#FE6D6A" }}
        ></div>
        <p>{todo.description}</p>
        <div className="tags-box">
          {todo.tags?.map((tag) => {
            return (
              <div key={tag.id} className="tag">
                <p>{tag.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="item-buttons">
        <button
          className="edit-button"
          onClick={() => {
            navigate("/app/edit", { state: todo });
          }}
        >
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button className="remove-button" onClick={onDeleteTodo}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
