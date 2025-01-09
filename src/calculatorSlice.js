import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  operation: ""
}

const operate = (a, b, operation) => {
  if (operation === "*") return parseFloat(a) * parseFloat(b)
  if (operation === "+") return parseFloat(a) + parseFloat(b)
  if (operation === "-") return parseFloat(a) - parseFloat(b)
  if (operation === "/" && (a === "0" || b === "0")) {
    alert("You can't divide by zero!")
    return "";
  } else {
    return parseFloat(a) / parseFloat(b)
  }
}

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setFirstNumber: (state, action) => {
      if (state.firstNumber.includes(".") && action.payload === ".") return
      if (state.firstNumber === "" && action.payload === ".") return
      state.firstNumber += action.payload
    },

    handleOperation: (state, action) => {
      if (state.firstNumber === "" && state.secondNumber === "") return
      if (state.firstNumber !== "" && state.secondNumber !== "" && state.operation !== "") {
        state.secondNumber = operate(state.secondNumber, state.firstNumber, state.operation)
        state.operation = action.payload
        state.firstNumber = ""
        return
      }

      if (state.firstNumber !== "" && state.secondNumber === "") {
        state.secondNumber = state.firstNumber
        state.operation = action.payload
        state.firstNumber = ""
        return
      }

      if (state.secondNumber !== "" && state.firstNumber === "") {
        state.operation = action.payload
        return
      }
    },

    handleClear: (state) => {
      state.firstNumber = ""
      state.secondNumber = ""
      state.operation = ""
    },

    handleDelete: (state) => {
      if (state.firstNumber !== "") {
        state.firstNumber = state.firstNumber.substring(0, state.firstNumber.length - 1)
      }
    },

    handleEqual: (state) => {
      if (state.firstNumber !== "" && state.secondNumber !== "" && state.operation !== "") {
        state.firstNumber = `${operate(state.secondNumber, state.firstNumber, state.operation)}`
        state.operation = ""
        state.secondNumber = ""
      }
    }
  }
})

export const {setFirstNumber, handleOperation, handleClear, handleEqual, handleDelete} = calculatorSlice.actions
export default calculatorSlice.reducer
