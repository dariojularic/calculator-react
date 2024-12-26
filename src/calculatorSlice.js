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
      if (state.firstNumber.includes(".") && action.payload === ".") return
      // console.log(typeof state.firstNumber)
      // console.log("state.firstNumber", state.firstNumber)
      // console.log("action.payload", action.payload)
      // console.log("action", action)
      state.firstNumber += action.payload
      // console.log("state.firstNumber", state.firstNumber)
    },
    setOperation: (state, action) => {
      // console.log("state.operation", state.operation)
      state.secondNumber = state.firstNumber
      state.operation = action.payload
      state.firstNumber = ""
      // console.log("state.operation", state.operation)
    },


  }
})

export const {setFirstNumber, setOperation} = calculatorSlice.actions
export default calculatorSlice.reducer
