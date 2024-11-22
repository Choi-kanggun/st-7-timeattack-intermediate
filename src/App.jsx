import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoListWrapper from "./components/TodoListWrapper";

function App() {
  // TODO: useState 로 되어 있는 부분을 redux 전역상태관리로 리팩터링 해보세요.
  // initialState 에 있는 더미 데이터는 제거하셔도 좋습니다.

  return (
    <div className="App">
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoListWrapper />
    </div>
  );
}

export default App;
