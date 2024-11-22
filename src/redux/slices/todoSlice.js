import { createSlice } from "@reduxjs/toolkit";

// TODO: 로컬스토리지에 최신상태를 동기화 해서, 새로고침 시에도 상태가 유지되도록 해보세요.
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // TODO: 투두 추가 상태변경 해보세요.
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      // TODO: 투두 삭제 상태변경 해보세요.
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action) => {
      // TODO: 투두의 isDone 속성값(boolean)을 토글링하도록 상태변경 해보세요.
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
