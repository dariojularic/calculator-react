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
    setFirstNumber: (state, action) => {
      console.log("state.firstNumber", state.firstNumber)
      console.log("action", action)
      // const firstNumber = state.firstNumber
      state.firstNumber += action.payload

    },
    setOperation: (state, action) => {

    },
    // setResult

  }
})

// export const {setFirstNumber} = calculatorSlice.actions
// export default calculatorSlice.reducer
