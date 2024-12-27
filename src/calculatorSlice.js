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
      if (state.firstNumber === "" && state.secondNumber === "") return
      if (state.secondNumber === "") {
        state.secondNumber = state.firstNumber
        state.operation = action.payload
        state.firstNumber = ""
      }
      // if (state.secondNumber !== "") state.operation = action.payload
      // if (state.firstNumber !== "" && state.operation !== "" && state.secondNumber !== "") {
      //   console.log("state.operation", state.operation)
      //   console.log("state.firstNumber", state.firstNumber)
      //   console.log("state.secondNumber", state.secondNumber)
      //   if (action.payload === "=") {
      //     state.firstNumber = {}
        }
        if (state.operation === "+") state.secondNumber = parseInt(state.secondNumber) + parseInt(state.firstNumber)
        if (state.operation === "-") state.secondNumber = state.secondNumber - state.firstNumber
        if (state.operation === "/") state.secondNumber = state.secondNumber / state.firstNumber
        if (state.operation === "*") state.secondNumber = state.secondNumber * state.firstNumber
        // state.operation = action.payload
        state.firstNumber = ""
      }

      // console.log("state.operation", state.operation)
      // console.log("state.operation", state.operation)
    },
    clear: (state) => {
      state.firstNumber = ""
      state.secondNumber = ""
      state.operation = ""
    }


  }
})

export const {setFirstNumber, setOperation, clear} = calculatorSlice.actions
export default calculatorSlice.reducer
