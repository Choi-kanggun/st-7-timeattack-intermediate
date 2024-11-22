import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    dispatch(addTodo({ id: Date.now(), title, content, isDone: false }));
    // TODO: 리덕스의 reducer 로 상태 변경할 수 있게 해주세요.
    // setTodos((prevTodos) => [
    //   ...prevTodos,
    //   { id: Date.now(), title, content, isDone: false },
    // ]);

    e.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>제목:</label>
      <input name="title" type="text" />
      <label>내용:</label>
      <input name="content" type="text" />
      <button type="submit">추가</button>
    </form>
  );
}
