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
      console.log("state.operation, before", state.operation)
      console.log("state.firstNumber, before", state.firstNumber)
      console.log("state.secondNumber, before", state.secondNumber)

      // drugi slucaj, imam first, second i operation


      if (state.firstNumber !== "" && state.secondNumber === "") {
        state.secondNumber = state.firstNumber
        state.operation = action.payload
        state.firstNumber = ""
      }
      if (state.secondNumber !== "" && state.firstNumber === "") {
        console.log(state.operation)
        state.operation = action.payload
        console.log(state.operation)
      }
      if (state.firstNumber !== "" && state.operation !== "" && state.secondNumber !== "") {
        if (action.payload === "=") {
          state.firstNumber = {}
        }



        // oce ovo bit posebna funkcija? di je pisem?
        if (state.operation === "+") state.secondNumber = parseInt(state.secondNumber) + parseInt(state.firstNumber)
        if (state.operation === "-") state.secondNumber = state.secondNumber - state.firstNumber
        if (state.operation === "/") state.secondNumber = state.secondNumber / state.firstNumber
        if (state.operation === "*") state.secondNumber = state.secondNumber * state.firstNumber
        // state.operation = action.payload
        state.firstNumber = ""
      }
      console.log("state.operation, after", state.operation)
      console.log("state.firstNumber, after", state.firstNumber)
      console.log("state.secondNumber, after", state.secondNumber)


      // console.log("state.operation", state.operation)
      // console.log("state.operation", state.operation)
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

export const {setFirstNumber, handleOperation, clear} = calculatorSlice.actions
export default calculatorSlice.reducer
