import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  operation: ""
}

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumbers: (state, action) => {

    }
  }
})

export const {addNumbers} = calculatorSlice.actions
export default calculatorSlice.reducer
