import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  operation: ""
}

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setFirstNumber: (state, action) => {
      console.log("state.firstNumber", state.firstNumber)
      state.firstNumber += action.payload
    },
    setOperation: (state, action) => {
      state.operation = action.payload
    },
    // setResult

  }
})

export const {setFirstNumber, setOperation} = calculatorSlice.actions
export default calculatorSlice.reducer
