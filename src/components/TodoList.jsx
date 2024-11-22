import TodoItem from "./TodoItem";

import useTodo from "../hooks/useTodo";

export default function TodoList({ isDone }) {
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.
  const { filteredTodos, toggleTodoItem, deleteTodoItem } = useTodo(isDone);
  return (
    <>
      <h2>{isDone ? "Done" : "Wokring..."}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
