// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
// 아래 공식문서에서 제공하는 예시 코드를 수정해서 완성하세요.

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += Number(action.payload);
    },
    decrement: (state, action) => {
      state.value -= Number(action.payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
