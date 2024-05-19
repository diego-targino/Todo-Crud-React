import { useSelector } from "react-redux";
import { CategorySelect } from "../../components/categorySelect/categorySelect";
import { TodoItem } from "../../components/todoItem/todoItem";
import { TodoResponseDTO } from "../../dtos/response/todos/todoResponseDTO";
import "./home.style.css";
import { ReactElement, useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux";
import { listTodosAction } from "../../redux/actions/todos";
import { useNavigate } from "react-router-dom";

const todos: TodoResponseDTO[] = [
  {
    id: "1",
    completed: false,
    description: "Fazer Algo",
    category: undefined,
  },
  {
    id: "2",
    completed: false,
    description: "Fazer Algo 2",
    category: undefined,
  },
];

export function Home(): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState = useSelector((state: RootState) => state.user);
  const todoState = useSelector((state: RootState) => state.todo);

  const listTodos = async (categoryId?: string) => {
    if (userState.user?.id && !todoState.loading)
      await dispatch(
        listTodosAction({ userId: userState.user.id, categoryId: categoryId })
      );
  };

  useEffect(() => {
    listTodos();
  }, []);

  useEffect(() => {
    if (todoState.successDelete) listTodos();
  }, [todoState]);

  return (
    <div className="container">
      <div className="page-content">
        <div className="action-box">
          <CategorySelect onchange={listTodos} />
          <button className="add-todo" onClick={() => navigate("/app/create")}>
            Add tarefa
          </button>
          <button
            className="manage-categories"
            onClick={() => navigate("/app/categories")}
          >
            Gerenciar categorias
          </button>
        </div>
        <div className="list-box">
          {todoState.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} listTodos={listTodos} />
          ))}
        </div>
      </div>
    </div>
  );
}
