import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  operation: ""
}

// umjesto jedne velike petlje napravit petlju za brojeve i posebno za operacije
// napravit za clear i delete posebnu komponentu i upisat je u grid sa ostalim buttonima
// napravit posebne funkcije za operacije (+-/*)
// napravit operate funkciju
// parsovat brojeve kod usporedivanja
// kreni od najlakseg uslova (imam oba broja i operaciju)

const operate = (a, b, operation) => {
  if (operation === "*") return parseFloat(a) * parseFloat(b)
  if (operation === "+") return parseFloat(a) + parseFloat(b)
  if (operation === "-") return parseFloat(a) - parseFloat(b)
  if (operation === "/" && (a === 0 || b === 0)) {
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
      state.firstNumber += action.payload
    },
    handleOperation: (state, action) => {
      if (state.firstNumber === "" && state.secondNumber === "") return

      // drugi slucaj, imam first, second i operation
      if (state.firstNumber !== "" && state.secondNumber !== "" && state.operation !== "") {
        state.secondNumber = operate(state.secondNumber, state.firstNumber, state.operation)
        // console.log(action.payload)
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
    clear: (state) => {
      state.firstNumber = ""
      state.secondNumber = ""
      state.operation = ""
    },
    equal: (state) => {
      if (state.firstNumber !== "" && state.secondNumber !== "" && state.operation !=="") {
        // operate, set the result as firstNumber/secondNumber to display it
      }
    }


  }
})

export const {setFirstNumber, handleOperation, clear, equal} = calculatorSlice.actions
export default calculatorSlice.reducer
