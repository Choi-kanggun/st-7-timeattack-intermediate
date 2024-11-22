import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";
import { useCallback } from "react";

export default function useTodo(isDone) {
  // TODO: 1. 커스텀훅을 완성해 주세요.
  // TODO: 2. 반환되는 함수들은 memoization 적용해 주세요.

  const todos = useSelector((store) => store.todo.todoList);
  const dispatch = useDispatch();
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  const toggleTodoItem = useCallback(() => {
    (id) => {
      // TODO: 리덕스 reducer 로 상태변경 해보세요.
      dispatch(toggleTodo(id));
      // setTodos((prevTodos) =>
      //   prevTodos.map((todo) =>
      //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      //   )
      // );
    };
  }, [dispatch]);

  const deleteTodoItem = useCallback(() => {
    (id) => {
      dispatch(deleteTodo(id));
      // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
  }, [dispatch]);
  return { filteredTodos, toggleTodoItem, deleteTodoItem };
}
